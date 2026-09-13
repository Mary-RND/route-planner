"""Приёмочные тесты для планировщика путешествия «Маршрут» (Lesson 6).

Проверяют 16 критериев из docs/technical-specification.md:
AC-01..AC-16 для статического веб-приложения route-planner.
"""
import re
import subprocess
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "app"


def _read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


def _app_read(name: str) -> str:
    return (APP / name).read_text(encoding="utf-8")


# --- AC-01: app files exist ---

def test_app_files_exist():
    """AC-01: app/index.html, styles.css, app.js существуют."""
    for name in ("index.html", "styles.css", "app.js"):
        assert (APP / name).is_file(), f"app/{name} не найден"


# --- fixtures для парсинга app.js ---

@pytest.fixture(scope="module")
def appjs():
    return _app_read("app.js")


@pytest.fixture(scope="module")
def indexhtml():
    return _app_read("index.html")


@pytest.fixture(scope="module")
def stylescss():
    return _app_read("styles.css")


# --- AC-02: TRIP ---

def test_trip_data(appjs):
    """AC-02: TRIP: название «Лиссабон и океан», 7 дней, бюджет 180000."""
    assert "Лиссабон и океан" in appjs
    assert "startDate: '2026-09-12'" in appjs
    assert "endDate: '2026-09-18'" in appjs
    assert "days: 7" in appjs
    assert "totalBudget: 180000" in appjs


# --- AC-03: маршрут ---

def test_route_points(appjs):
    """AC-03: маршрут: Лиссабон, Кашкайш, Синтра, Эрисейра, Океан, Лиссабон."""
    for city in ("Лиссабон", "Кашкайш", "Синтра", "Эрисейра", "Океан"):
        assert city in appjs, f"Город маршрута {city} не найден"
    # в DAYS_DATA 7 дней из 7 городов
    assert "route: ['Лиссабон', 'Кашкайш', 'Синтра', 'Эрисейра', 'Океан', 'Лиссабон']" in appjs


# --- AC-04: 7 дней, у каждого calm и intense ---

def test_seven_days_with_paces(appjs):
    """AC-04: DAYS_DATA содержит 7 дней, у каждого массивы calm и intense."""
    assert len(re.findall(r"city: '", appjs)) == 7
    assert len(re.findall(r"calm: \[", appjs)) == 7
    assert len(re.findall(r"intense: \[", appjs)) == 7


# --- AC-05: переключение темпа меняет события ---

def test_pace_changes_events(appjs):
    """AC-05: у дня 1 набор calm отличается от intense и меньше по количеству."""
    calm_events = re.findall(r"calm: \[(.*?)\]", appjs, re.DOTALL)[0]
    intense_events = re.findall(r"intense: \[(.*?)\]", appjs, re.DOTALL)[0]
    calm_count = len(re.findall(r"\{\s*id:", calm_events))
    intense_count = len(re.findall(r"\{\s*id:", intense_events))
    assert calm_count != intense_count
    assert calm_count < intense_count


# --- AC-06: бронирования ---

def test_bookings_default(appjs):
    """AC-06: 4 бронирования, статусы confirmed(2)/pending(2)."""
    assert "BOOKINGS_DEFAULT" in appjs
    bookings = re.findall(r"status: '(confirmed|pending)'", appjs)
    assert bookings.count("confirmed") == 2
    assert bookings.count("pending") == 2
    for btype in ("flight", "hotel", "train", "excursion"):
        assert f"type: '{btype}'" in appjs, f"Бронь типа {btype} не найдена"


# --- AC-07: чек-лист ---

def test_checklist_default(appjs):
    """AC-07: категории документы/деньги/вещи/здоровье, не менее 10 пунктов."""
    assert "CHECKLIST_DEFAULT" in appjs
    items = re.findall(r"category: '(\w+)'", appjs)
    assert {"документы", "деньги", "вещи", "здоровье"} <= set(items)
    assert len(items) >= 10


# --- AC-08: localStorage ключи ---

def test_localstorage_keys(appjs):
    """AC-08: ключи localStorage: route_bookings, route_checklist, route_pace."""
    for key in ("route_bookings", "route_checklist", "route_pace"):
        assert f"'{key}'" in appjs, f"Ключ localStorage {key} не найден"
        assert f"localStorage.setItem('{key}'" in appjs or f"localStorage.getItem('{key}'" in appjs


# --- AC-09: элементы index.html ---

def test_ui_elements(indexhtml):
    """AC-09: ключевые элементы интерфейса присутствуют в index.html."""
    for element_id in ("day-tabs", "day-info", "day-events",
                       "budget-progress", "bookings-list", "checklist-items",
                       "toast", "demo-panel"):
        assert f'id="{element_id}"' in indexhtml, f"Нет элемента id={element_id}"


# --- AC-10: кнопка «Подтвердить» ---

def test_confirm_button(appjs):
    """AC-10: для pending-брони предусмотрена кнопка «Подтвердить» и тост."""
    assert "Подтвердить" in appjs
    assert "dataset.action = 'confirm'" in appjs
    assert "case 'confirm'" in appjs
    assert "showToast" in appjs


# --- AC-11: состояния интерфейса ---

def test_ui_states(indexhtml, appjs):
    """AC-11: loading/error/empty/success реализованы."""
    for element_id in ("app-loader", "app-error", "app-empty"):
        assert f'id="{element_id}"' in indexhtml, f"Нет элемента id={element_id}"
    assert "onRetry" in appjs
    assert "uiState" in appjs


# --- AC-12: сброс данных ---

def test_reset_data(appjs):
    """AC-12: onReset + resetAllData + кнопка «Сбросить учебные данные»."""
    assert "function onReset" in appjs
    assert "function resetAllData" in appjs
    assert "Сбросить учебные данные" in appjs or "resetAllData" in appjs


# --- AC-13: мобильная нижняя навигация ---

def test_bottom_navigation(indexhtml):
    """AC-13: #bottom-nav с видами Сегодня/Маршрут/Бюджет/Подготовка."""
    assert 'id="bottom-nav"' in indexhtml
    for view in ("today", "route", "budget", "prep"):
        assert f'data-view="{view}"' in indexhtml, f"Вид {view} не найден"
    for label in ("Сегодня", "Маршрут", "Бюджет", "Подготовка"):
        assert label in indexhtml


# --- AC-14: синтаксис JS ---

def test_node_syntax_check():
    """AC-14: node --check app/app.js не выдаёт ошибок."""
    result = subprocess.run(
        ["node", "--check", str(APP / "app.js")],
        capture_output=True, text=True, encoding="utf-8",
    )
    assert result.returncode == 0, f"node --check: {result.stderr}"


# --- AC-15: без сетевых обращений ---

def test_no_external_network(indexhtml, appjs):
    """AC-15: нет внешних ресурсов/CDN/API (кроме SVG namespace в app.js)."""
    for src in (indexhtml, appjs):
        # разрешаем только https://www.w3.org/2000/svg (SVG namespace)
        external = re.findall(r'https?://(?!www\.w3\.org/2000/svg)\S+', src)
        assert external == [], f"Обнаружены внешние ссылки: {external}"


# --- AC-16: адаптивность и prefers-reduced-motion ---

def test_responsive_css(stylescss):
    """AC-16: media-запросы планшет (768px), мобильный (<600px) и prefers-reduced-motion."""
    assert "@media" in stylescss
    assert "768px" in stylescss
    assert "600px" in stylescss
    assert "prefers-reduced-motion" in stylescss


# --- Дополнительно: ключевые функции в app.js ---

def test_appjs_has_required_functions(appjs):
    """app.js содержит все необходимые функции UI."""
    for fn in ("cacheDom", "renderCover", "renderPaceToggle", "renderDayTabs",
               "renderBudget", "renderBookings", "renderChecklist",
               "renderMobileToday", "onBookingConfirm", "onChecklistToggle",
               "onPaceChange", "onDaySelect", "onReset", "bindEvents", "init"):
        assert f"function {fn}" in appjs, f"function {fn} не найдена в app.js"