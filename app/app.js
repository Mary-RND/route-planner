/* ============================================
   1. DATA
   ============================================ */

const TRIP = {
  name: 'Лиссабон и океан',
  startDate: '2026-09-12',
  endDate: '2026-09-18',
  days: 7,
  route: ['Лиссабон', 'Кашкайш', 'Синтра', 'Эрисейра', 'Океан', 'Лиссабон'],
  totalBudget: 180000,
};

const PACE_HINTS = {
  calm: 'Много времени на прогулки и отдых. Успеете насладиться каждым городом без спешки.',
  intense: 'Максимум впечатлений! Каждый день наполнен событиями и открытиями.',
};

const DAYS_DATA = [
  {
    city: 'Лиссабон',
    date: '2026-09-12',
    label: 'День 1',
    calm: [
      { id: 'e1', time: '10:00', name: 'Прилёт в Лиссабон', category: 'транспорт', cost: 0, bookingId: 'b1' },
      { id: 'e2', time: '14:00', name: 'Заселение в отель', category: 'жильё', cost: 0, bookingId: 'b2' },
      { id: 'e3', time: '18:00', name: 'Прогулка по Алфаме', category: 'активность', cost: 0 },
    ],
    intense: [
      { id: 'e4', time: '08:00', name: 'Прилёт в Лиссабон', category: 'транспорт', cost: 0, bookingId: 'b1' },
      { id: 'e5', time: '11:00', name: 'Заселение в отель', category: 'жильё', cost: 0, bookingId: 'b2' },
      { id: 'e6', time: '13:00', name: 'Обзорная экскурсия по Лиссабону', category: 'экскурсия', cost: 5000, bookingId: 'b4' },
      { id: 'e7', time: '18:00', name: 'Прогулка по Алфаме', category: 'активность', cost: 0 },
      { id: 'e8', time: '21:00', name: 'Ужин в ресторане', category: 'еда', cost: 4500 },
    ],
  },
  {
    city: 'Кашкайш',
    date: '2026-09-13',
    label: 'День 2',
    calm: [
      { id: 'e9', time: '09:00', name: 'Поезд в Кашкайш', category: 'транспорт', cost: 2000, bookingId: 'b3' },
      { id: 'e10', time: '11:00', name: 'Прогулка по набережной', category: 'активность', cost: 0 },
      { id: 'e11', time: '14:00', name: 'Обед у океана', category: 'еда', cost: 3500 },
    ],
    intense: [
      { id: 'e12', time: '08:00', name: 'Поезд в Кашкайш', category: 'транспорт', cost: 2000, bookingId: 'b3' },
      { id: 'e13', time: '10:00', name: 'Музей моря', category: 'активность', cost: 1500 },
      { id: 'e14', time: '12:00', name: 'Экскурсия «Берег львов»', category: 'экскурсия', cost: 4000 },
      { id: 'e15', time: '15:00', name: 'Пляж Гуиншу', category: 'активность', cost: 0 },
      { id: 'e16', time: '19:00', name: 'Ужин в рыбном ресторане', category: 'еда', cost: 4200 },
    ],
  },
  {
    city: 'Синтра',
    date: '2026-09-14',
    label: 'День 3',
    calm: [
      { id: 'e17', time: '09:00', name: 'Переезд в Синтру', category: 'транспорт', cost: 2000 },
      { id: 'e18', time: '11:00', name: 'Дворец Пена', category: 'активность', cost: 2000 },
      { id: 'e19', time: '15:00', name: 'Прогулка по парку', category: 'активность', cost: 0 },
    ],
    intense: [
      { id: 'e20', time: '08:00', name: 'Переезд в Синтру', category: 'транспорт', cost: 2000 },
      { id: 'e21', time: '10:00', name: 'Дворец Пена', category: 'активность', cost: 2000 },
      { id: 'e22', time: '13:00', name: 'Мавританская крепость', category: 'активность', cost: 1500 },
      { id: 'e23', time: '16:00', name: 'Кондитерская — паштейш де Синтра', category: 'еда', cost: 1500 },
      { id: 'e24', time: '19:00', name: 'Экскурсия «Тайны Синтры»', category: 'экскурсия', cost: 4500 },
    ],
  },
  {
    city: 'Эрисейра',
    date: '2026-09-15',
    label: 'День 4',
    calm: [
      { id: 'e25', time: '10:00', name: 'Переезд в Эрисейру', category: 'транспорт', cost: 2500 },
      { id: 'e26', time: '13:00', name: 'Прогулка по рыбацкой деревне', category: 'активность', cost: 0 },
      { id: 'e27', time: '17:00', name: 'Закат на мысе Рока', category: 'активность', cost: 0 },
    ],
    intense: [
      { id: 'e28', time: '08:00', name: 'Переезд в Эрисейру', category: 'транспорт', cost: 2500 },
      { id: 'e29', time: '10:00', name: 'Сёрф-курс для начинающих', category: 'активность', cost: 5200 },
      { id: 'e30', time: '13:00', name: 'Обед в рыбном кафе', category: 'еда', cost: 3500 },
      { id: 'e31', time: '16:00', name: 'Прогулка по старому порту', category: 'активность', cost: 0 },
      { id: 'e32', time: '19:00', name: 'Закат на мысе Рока', category: 'активность', cost: 0 },
    ],
  },
  {
    city: 'Океан',
    date: '2026-09-16',
    label: 'День 5',
    calm: [
      { id: 'e33', time: '09:00', name: 'Пляж Прая да Урекейра', category: 'активность', cost: 0 },
      { id: 'e34', time: '13:00', name: 'Пикник на пляже', category: 'еда', cost: 2000 },
      { id: 'e35', time: '17:00', name: 'Медитация у воды', category: 'активность', cost: 0 },
    ],
    intense: [
      { id: 'e36', time: '07:00', name: 'Рассветная йога на пляже', category: 'активность', cost: 2000 },
      { id: 'e37', time: '10:00', name: 'Сёрф-сессия', category: 'активность', cost: 4000 },
      { id: 'e38', time: '13:00', name: 'Обед в прибрежном ресторане', category: 'еда', cost: 4500 },
      { id: 'e39', time: '16:00', name: 'Прогулка вдоль побережья', category: 'активность', cost: 0 },
      { id: 'e40', time: '20:00', name: 'Романтический ужин', category: 'еда', cost: 5000 },
    ],
  },
  {
    city: 'Лиссабон',
    date: '2026-09-17',
    label: 'День 6',
    calm: [
      { id: 'e41', time: '10:00', name: 'Возвращение в Лиссабон', category: 'транспорт', cost: 2000 },
      { id: 'e42', time: '14:00', name: 'Монастырь Жеронимуш', category: 'активность', cost: 1500 },
      { id: 'e43', time: '18:00', name: 'Прощальная прогулка', category: 'активность', cost: 0 },
    ],
    intense: [
      { id: 'e44', time: '08:00', name: 'Возвращение в Лиссабон', category: 'транспорт', cost: 2000 },
      { id: 'e45', time: '10:00', name: 'Монастырь Жеронимуш', category: 'активность', cost: 1500 },
      { id: 'e46', time: '13:00', name: 'Верхняя площадь + замок', category: 'активность', cost: 2000 },
      { id: 'e47', time: '16:00', name: 'Шоппинг на Авенида Либердади', category: 'активность', cost: 0 },
      { id: 'e48', time: '20:00', name: 'Прощальный ужин и фадо', category: 'еда', cost: 5500 },
    ],
  },
  {
    city: 'Лиссабон',
    date: '2026-09-18',
    label: 'День 7',
    calm: [
      { id: 'e49', time: '09:00', name: 'Выезд из отеля', category: 'жильё', cost: 0 },
      { id: 'e50', time: '12:00', name: 'Вылет домой', category: 'транспорт', cost: 0, bookingId: 'b1' },
    ],
    intense: [
      { id: 'e51', time: '07:00', name: 'Утренняя пробежка в парке', category: 'активность', cost: 0 },
      { id: 'e52', time: '09:00', name: 'Выезд из отеля', category: 'жильё', cost: 0 },
      { id: 'e53', time: '10:00', name: 'Кофе в кафе на Rossio', category: 'еда', cost: 800 },
      { id: 'e54', time: '12:00', name: 'Вылет домой', category: 'транспорт', cost: 0, bookingId: 'b1' },
    ],
  },
];

const BOOKINGS_DEFAULT = [
  { id: 'b1', type: 'flight', title: 'Перелёт', detail: 'SVO → LIS', status: 'confirmed', cost: 45000, icon: '✈' },
  { id: 'b2', type: 'hotel', title: 'Отель', detail: 'Lisbon Heart Hotel · 5 ночей', status: 'confirmed', cost: 63000, icon: '🏨' },
  { id: 'b3', type: 'train', title: 'Поезд', detail: 'Лиссабон → Кашкайш', status: 'pending', cost: 2000, icon: '🚂' },
  { id: 'b4', type: 'excursion', title: 'Экскурсия', detail: 'Обзор Лиссабона', status: 'pending', cost: 5000, icon: '🗺' },
];

const CHECKLIST_DEFAULT = [
  { id: 'c1', category: 'документы', text: 'Загранпаспорт', checked: false },
  { id: 'c2', category: 'документы', text: 'Билеты (скачать)', checked: false },
  { id: 'c3', category: 'документы', text: 'Бронирование отеля (распечатать)', checked: false },
  { id: 'c4', category: 'деньги', text: 'Наличные евро', checked: false },
  { id: 'c5', category: 'деньги', text: 'Банковская карта', checked: false },
  { id: 'c6', category: 'вещи', text: 'Зарядка телефона', checked: false },
  { id: 'c7', category: 'вещи', text: 'Наушники', checked: false },
  { id: 'c8', category: 'вещи', text: 'Солнцезащитный крем', checked: false },
  { id: 'c9', category: 'вещи', text: 'Плавки / полотенце', checked: false },
  { id: 'c10', category: 'здоровье', text: 'Аптечка', checked: false },
  { id: 'c11', category: 'здоровье', text: 'Лекарства (по необходимости)', checked: false },
];

const BUDGET_CATEGORIES = [
  { name: 'Транспорт', color: 'var(--sea)' },
  { name: 'Жильё', color: 'var(--accent)' },
  { name: 'Экскурсии', color: 'var(--coral)' },
  { name: 'Еда', color: 'var(--yellow)' },
  { name: 'Активность', color: 'var(--green)' },
];

/* ============================================
   2. STATE
   ============================================ */

const state = {
  uiState: 'success',
  pace: 'calm',
  activeDay: 0,
  activeView: 'today',
  activeChecklistCat: 'все',
  bookings: [],
  checklist: [],
  demoOpen: false,
};

/* ============================================
   3. DOM SELECTORS
   ============================================ */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {};

function cacheDom() {
  dom.app = $('#app');
  dom.loader = $('#app-loader');
  dom.error = $('#app-error');
  dom.empty = $('#app-empty');

  dom.coverTitle = $('#cover-title');
  dom.coverDates = $('#cover-dates');
  dom.coverCountdown = $('#cover-countdown');
  dom.routeSvg = $('#route-svg');
  dom.routeLabels = $('#route-labels');

  dom.paceHint = $('#pace-hint');
  dom.paceForecast = $('#pace-forecast');

  dom.dayTabs = $('#day-tabs');
  dom.dayInfo = $('#day-info');
  dom.dayEvents = $('#day-events');

  dom.budgetProgress = $('#budget-progress');
  dom.budgetPercent = $('#budget-percent');
  dom.budgetTotal = $('#budget-total');
  dom.budgetPlanned = $('#budget-planned');
  dom.budgetRemaining = $('#budget-remaining');
  dom.budgetCategories = $('#budget-categories');

  dom.bookingsList = $('#bookings-list');
  dom.checklistItems = $('#checklist-items');
  dom.checklistProgressBar = $('#checklist-progress-bar');
  dom.checklistProgressText = $('#checklist-progress-text');

  dom.mobileToday = $('#mobile-today');
  dom.mtTitle = $('#mt-title');
  dom.mtDate = $('#mt-date');
  dom.mtEvent = $('#mt-event');
  dom.mtBookingCard = $('#mt-booking-card');
  dom.mtTaskCard = $('#mt-task-card');

  dom.toast = $('#toast');
  dom.demoBody = null;
}

/* ============================================
   4. HELPERS
   ============================================ */

function formatCurrency(n) {
  return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
}

function formatDateLong(dateStr) {
  const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  const d = new Date(dateStr);
  return d.getDate() + ' ' + months[d.getMonth()];
}

function daysLeft(target) {
  const now = new Date();
  const targetDate = new Date(target + 'T00:00:00');
  const diff = targetDate - now;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function getEvents(dayIndex) {
  const day = DAYS_DATA[dayIndex];
  return state.pace === 'calm' ? day.calm : day.intense;
}

function getBookingById(id) {
  return state.bookings.find(b => b.id === id);
}

function getTotalCostByCategory() {
  const cats = {};
  BUDGET_CATEGORIES.forEach(c => cats[c.name] = 0);

  // Какие брони уже учтены в событиях (через bookingId с ненулевой ценой события)
  const bookedInEvents = new Set();
  DAYS_DATA.forEach((day, i) => {
    const events = getEvents(i);
    events.forEach(e => {
      const catName = BUDGET_CATEGORIES.find(c => c.name.toLowerCase() === e.category)?.name;
      if (catName && e.cost > 0) cats[catName] += e.cost;
      if (e.bookingId && e.cost > 0) bookedInEvents.add(e.bookingId);
    });
  });

  state.bookings.forEach(b => {
    // Не учитываем бронь повторно, если её цена уже вошла через событие с тем же bookingId
    if (b.status === 'confirmed' && !bookedInEvents.has(b.id)) {
      const catName = BUDGET_CATEGORIES.find(c => c.name.toLowerCase() === b.type ||
        (b.type === 'flight' && c.name === 'Транспорт') ||
        (b.type === 'train' && c.name === 'Транспорт') ||
        (b.type === 'hotel' && c.name === 'Жильё') ||
        (b.type === 'excursion' && c.name === 'Экскурсии')
      )?.name;
      if (catName) cats[catName] += b.cost;
    }
  });

  return cats;
}

function getPlannedBudget() {
  const cats = getTotalCostByCategory();
  return Object.values(cats).reduce((s, v) => s + v, 0);
}

function getDayCost(dayIndex) {
  return getEvents(dayIndex).reduce((s, e) => s + e.cost, 0);
}

/* ============================================
   5. PERSISTENCE
   ============================================ */

function loadState() {
  try {
    const savedBookings = localStorage.getItem('route_bookings');
    state.bookings = savedBookings ? JSON.parse(savedBookings) : JSON.parse(JSON.stringify(BOOKINGS_DEFAULT));
  } catch {
    state.bookings = JSON.parse(JSON.stringify(BOOKINGS_DEFAULT));
  }

  try {
    const savedChecklist = localStorage.getItem('route_checklist');
    state.checklist = savedChecklist ? JSON.parse(savedChecklist) : JSON.parse(JSON.stringify(CHECKLIST_DEFAULT));
  } catch {
    state.checklist = JSON.parse(JSON.stringify(CHECKLIST_DEFAULT));
  }

  try {
    const savedPace = localStorage.getItem('route_pace');
    if (savedPace === 'calm' || savedPace === 'intense') state.pace = savedPace;
  } catch {
    /* ignore */
  }
}

function saveBookings() {
  localStorage.setItem('route_bookings', JSON.stringify(state.bookings));
}

function saveChecklist() {
  localStorage.setItem('route_checklist', JSON.stringify(state.checklist));
}

function savePace() {
  localStorage.setItem('route_pace', state.pace);
}

function resetAllData() {
  localStorage.removeItem('route_bookings');
  localStorage.removeItem('route_checklist');
  localStorage.removeItem('route_pace');
  state.bookings = JSON.parse(JSON.stringify(BOOKINGS_DEFAULT));
  state.checklist = JSON.parse(JSON.stringify(CHECKLIST_DEFAULT));
  state.pace = 'calm';
}

/* ============================================
   6. RENDER
   ============================================ */

function render() {
  renderUIState();
  if (state.uiState !== 'success') return;

  renderCover();
  renderPaceToggle();
  renderDayTabs();
  renderDayContent();
  renderBudget();
  renderBookings();
  renderChecklist();
  renderMobileToday();
  updateNavState();
}

function renderUIState() {
  dom.app.classList.toggle('hidden', state.uiState !== 'success');
  dom.loader.classList.toggle('hidden', state.uiState !== 'loading');
  dom.error.classList.toggle('hidden', state.uiState !== 'error');
  dom.empty.classList.toggle('hidden', state.uiState !== 'empty');
}

/* --- Блок 1: Обложка --- */
function renderCover() {
  dom.coverTitle.textContent = TRIP.name;
  dom.coverDates.textContent = formatDateLong(TRIP.startDate) + '–' + formatDateLong(TRIP.endDate) + ' · ' + TRIP.days + ' дней';

  const left = daysLeft(TRIP.startDate);
  if (left > 0) {
    dom.coverCountdown.textContent = 'До отъезда осталось ' + left + ' ' + dayWord(left);
  } else if (left === 0) {
    dom.coverCountdown.textContent = 'Поехали!';
  } else {
    dom.coverCountdown.textContent = 'Путешествие завершено';
  }

  renderRouteSvg();
}

function dayWord(n) {
  if (n % 10 === 1 && n % 100 !== 11) return 'день';
  if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return 'дня';
  return 'дней';
}

function renderRouteSvg() {
  const svg = dom.routeSvg;
  svg.innerHTML = '';

  const route = TRIP.route;
  const n = route.length;
  const padding = 30;
  const width = 600;
  const usable = width - padding * 2;

  // Точки
  const points = route.map((_, i) => ({
    x: padding + (usable / (n - 1)) * i,
    y: 30,
  }));

  // Путь (волнистая линия)
  let pathD = 'M ' + points[0].x + ' ' + points[0].y;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cp1x = prev.x + (curr.x - prev.x) * 0.4;
    const cp2x = prev.x + (curr.x - prev.x) * 0.6;
    pathD += ' C ' + cp1x + ' ' + (prev.y - 12) + ' ' + cp2x + ' ' + (curr.y + 12) + ' ' + curr.x + ' ' + curr.y;
  }

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathD);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'rgba(255,255,255,0.4)');
  path.setAttribute('stroke-width', '3');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-dasharray', '8 6');
  svg.appendChild(path);

  // Точки городов
  points.forEach((p, i) => {
    const isLast = i === points.length - 1;
    const r = isLast ? 8 : 6;
    const fill = i === 0 ? '#fff' : isLast ? '#f07060' : 'rgba(255,255,255,0.85)';

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', p.x);
    circle.setAttribute('cy', p.y);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', fill);
    svg.appendChild(circle);

    if (i === 0 || isLast) {
      const inner = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      inner.setAttribute('cx', p.x);
      inner.setAttribute('cy', p.y);
      inner.setAttribute('r', r - 3);
      inner.setAttribute('fill', isLast ? '#fff' : 'var(--accent)');
      svg.appendChild(inner);
    }
  });

  // Названия городов под линией — каждая подпись точно под своей точкой
  dom.routeLabels.innerHTML = '';
  points.forEach((p, i) => {
    const span = document.createElement('span');
    span.className = 'route-label';
    span.textContent = route[i];
    const xPercent = (p.x / width) * 100;
    span.style.left = xPercent + '%';
    dom.routeLabels.appendChild(span);
  });
}

/* --- Блок 2: Темп --- */
function renderPaceToggle() {
  $$('.pace-btn').forEach(btn => {
    const active = btn.dataset.pace === state.pace;
    btn.classList.toggle('pace-btn--active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  const totalForecast = DAYS_DATA.reduce((sum, _, i) => sum + getDayCost(i), 0);
  dom.paceForecast.textContent = formatCurrency(totalForecast);

  // Подсказка: текст темпа + стоимость текущего дня
  const dayCost = getDayCost(state.activeDay);
  const dayLabel = DAYS_DATA[state.activeDay].label;
  dom.paceHint.innerHTML =
    '<span>' + PACE_HINTS[state.pace] + '</span>' +
    '<span class="pace-toggle__day-cost">' + dayLabel + ': ' + formatCurrency(dayCost) + '</span>';
}

/* --- Блок 3: Маршрут --- */
function renderDayTabs() {
  dom.dayTabs.innerHTML = '';
  DAYS_DATA.forEach((day, i) => {
    const btn = document.createElement('button');
    btn.className = 'day-tab' + (i === state.activeDay ? ' day-tab--active' : '');
    btn.textContent = day.label;
    btn.dataset.action = 'day';
    btn.dataset.day = i;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === state.activeDay ? 'true' : 'false');
    dom.dayTabs.appendChild(btn);
  });
}

function renderDayContent() {
  const day = DAYS_DATA[state.activeDay];
  dom.dayInfo.innerHTML = '';

  const citySpan = document.createElement('span');
  citySpan.className = 'day-info__city';
  citySpan.textContent = day.city;

  const dateSpan = document.createElement('span');
  dateSpan.className = 'day-info__date';
  dateSpan.textContent = formatDateLong(day.date);

  const costSpan = document.createElement('span');
  costSpan.className = 'day-info__cost';
  costSpan.textContent = formatCurrency(getDayCost(state.activeDay));

  dom.dayInfo.appendChild(citySpan);
  dom.dayInfo.appendChild(dateSpan);
  dom.dayInfo.appendChild(costSpan);

  const events = getEvents(state.activeDay);
  renderEvents(events);
}

function renderEvents(events) {
  dom.dayEvents.innerHTML = '';

  if (events.length === 0) {
    dom.dayEvents.style.display = '';
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'day-events__empty';
    emptyMsg.innerHTML =
      '<svg width="48" height="48" viewBox="0 0 64 64" fill="none"><rect x="12" y="12" width="40" height="40" rx="8" stroke="#6B7A9E" stroke-width="2.5"/><line x1="20" y1="28" x2="44" y2="28" stroke="#6B7A9E" stroke-width="2.5" stroke-linecap="round"/><line x1="20" y1="36" x2="36" y2="36" stroke="#6B7A9E" stroke-width="2.5" stroke-linecap="round"/></svg>' +
      '<p>На этот день событий нет</p>';
    dom.dayEvents.appendChild(emptyMsg);
    return;
  }

  dom.dayEvents.style.display = '';

  events.forEach((ev, idx) => {
    const card = document.createElement('div');
    card.className = 'event-card event-card--enter' + (idx === 0 ? ' event-card--current' : '');
    card.style.animationDelay = (idx * 60) + 'ms';

    const time = document.createElement('div');
    time.className = 'event-card__time';
    time.textContent = ev.time;

    const body = document.createElement('div');
    body.className = 'event-card__body';

    const name = document.createElement('div');
    name.className = 'event-card__name';
    name.textContent = ev.name;

    const meta = document.createElement('div');
    meta.className = 'event-card__meta';

    const cat = document.createElement('span');
    cat.className = 'event-card__category event-card__category--' + ev.category;
    cat.textContent = ev.category;

    meta.appendChild(cat);

    if (ev.cost > 0) {
      const cost = document.createElement('span');
      cost.className = 'event-card__cost';
      cost.innerHTML = '<strong>' + formatCurrency(ev.cost) + '</strong>';
      meta.appendChild(cost);
    }

    if (ev.bookingId) {
      const booking = getBookingById(ev.bookingId);
      if (booking) {
        const status = document.createElement('span');
        status.className = 'event-card__status event-card__status--' + booking.status;
        status.textContent = booking.status === 'confirmed' ? 'Подтверждено' : 'Ожидание';
        meta.appendChild(status);
      }
    }

    body.appendChild(name);
    body.appendChild(meta);

    card.appendChild(time);
    card.appendChild(body);
    dom.dayEvents.appendChild(card);
  });
}

/* --- Блок 4: Бюджет --- */
function renderBudget() {
  const planned = getPlannedBudget();
  const remaining = TRIP.totalBudget - planned;
  const percent = Math.min(100, Math.round((planned / TRIP.totalBudget) * 100));

  dom.budgetTotal.textContent = formatCurrency(TRIP.totalBudget);
  dom.budgetPlanned.textContent = formatCurrency(planned);
  dom.budgetRemaining.textContent = formatCurrency(remaining);

  // Процент и кольцо
  dom.budgetPercent.textContent = percent + '%';
  const circumference = 2 * Math.PI * 65; // r=65
  const offset = circumference - (percent / 100) * circumference;
  dom.budgetProgress.style.strokeDashoffset = offset;

  // Цвет остатка
  if (remaining < 0) {
    dom.budgetRemaining.style.color = 'var(--red)';
  } else if (remaining < TRIP.totalBudget * 0.1) {
    dom.budgetRemaining.style.color = 'var(--yellow)';
  } else {
    dom.budgetRemaining.style.color = 'var(--green)';
  }

  // Категории
  const cats = getTotalCostByCategory();
  dom.budgetCategories.innerHTML = '';

  BUDGET_CATEGORIES.forEach(cat => {
    const value = cats[cat.name] || 0;
    const barPercent = planned > 0 ? (value / planned) * 100 : 0;

    const row = document.createElement('div');
    row.className = 'budget-cat';

    const dot = document.createElement('span');
    dot.className = 'budget-cat__dot';
    dot.style.background = cat.color;

    const name = document.createElement('span');
    name.className = 'budget-cat__name';
    name.textContent = cat.name;

    const barBg = document.createElement('div');
    barBg.className = 'budget-cat__bar-bg';

    const bar = document.createElement('div');
    bar.className = 'budget-cat__bar';
    bar.style.width = barPercent + '%';
    bar.style.background = cat.color;
    barBg.appendChild(bar);

    const val = document.createElement('span');
    val.className = 'budget-cat__value';
    val.textContent = formatCurrency(value);

    row.appendChild(dot);
    row.appendChild(name);
    row.appendChild(barBg);
    row.appendChild(val);
    dom.budgetCategories.appendChild(row);
  });
}

/* --- Блок 5: Бронирования --- */
function renderBookings() {
  dom.bookingsList.innerHTML = '';

  state.bookings.forEach(b => {
    const card = document.createElement('div');
    card.className = 'booking-card';

    const icon = document.createElement('div');
    icon.className = 'booking-card__icon booking-card__icon--' + b.type;
    icon.textContent = b.icon;

    const info = document.createElement('div');
    info.className = 'booking-card__info';

    const title = document.createElement('div');
    title.className = 'booking-card__title';
    title.textContent = b.title;

    const detail = document.createElement('div');
    detail.className = 'booking-card__detail';
    detail.textContent = b.detail;

    info.appendChild(title);
    info.appendChild(detail);

    const cost = document.createElement('span');
    cost.className = 'booking-card__cost';
    cost.textContent = formatCurrency(b.cost);

    card.appendChild(icon);
    card.appendChild(info);
    card.appendChild(cost);

    if (b.status === 'pending') {
      const statusBadge = document.createElement('span');
      statusBadge.className = 'booking-card__status booking-card__status--pending';
      statusBadge.textContent = 'Ожидание';
      card.appendChild(statusBadge);

      const btn = document.createElement('button');
      btn.className = 'booking-confirm-btn';
      btn.textContent = 'Подтвердить';
      btn.dataset.action = 'confirm';
      btn.dataset.bookingId = b.id;
      card.appendChild(btn);
    } else {
      const statusBadge = document.createElement('span');
      statusBadge.className = 'booking-card__status booking-card__status--confirmed';
      statusBadge.textContent = 'Подтверждено';
      card.appendChild(statusBadge);
    }

    dom.bookingsList.appendChild(card);
  });
}

/* --- Блок 6: Чек-лист --- */
function renderChecklist() {
  dom.checklistItems.innerHTML = '';

  // Прогресс
  const total = state.checklist.length;
  const checked = state.checklist.filter(c => c.checked).length;
  const percent = total > 0 ? Math.round((checked / total) * 100) : 0;
  dom.checklistProgressBar.style.width = percent + '%';
  dom.checklistProgressText.textContent = checked + ' / ' + total;

  // Обновляем активную вкладку
  $$('.checklist-tab').forEach(tab => {
    const active = tab.dataset.cat === state.activeChecklistCat;
    tab.classList.toggle('checklist-tab--active', active);
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  const filtered = state.activeChecklistCat === 'все'
    ? state.checklist
    : state.checklist.filter(c => c.category === state.activeChecklistCat);

  filtered.forEach(item => {
    const li = document.createElement('li');
    li.className = 'checklist-item' + (item.checked ? ' checklist-item--checked' : '');
    li.dataset.action = 'toggle-check';
    li.dataset.checkId = item.id;
    li.setAttribute('tabindex', '0');
    li.setAttribute('role', 'checkbox');
    li.setAttribute('aria-checked', item.checked ? 'true' : 'false');

    const checkbox = document.createElement('div');
    checkbox.className = 'checklist-item__checkbox';

    const text = document.createElement('span');
    text.className = 'checklist-item__text';
    text.textContent = item.text;

    const cat = document.createElement('span');
    cat.className = 'checklist-item__cat';
    cat.textContent = item.category;

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(cat);
    dom.checklistItems.appendChild(li);
  });
}

/* --- Мобильный «Сегодня» --- */
function renderMobileToday() {
  const today = DAYS_DATA[state.activeDay];
  dom.mtTitle.textContent = today.city;
  dom.mtDate.textContent = formatDateLong(today.date) + ' · ' + today.label + ' · ' + formatCurrency(getDayCost(state.activeDay));

  const events = getEvents(state.activeDay);

  // Ближайшее событие
  if (events.length > 0) {
    const ev = events[0];
    dom.mtEvent.innerHTML = '';

    const head = document.createElement('div');
    head.className = 'event-card__head';
    head.innerHTML =
      '<span class="event-card__time">' + ev.time + '</span>' +
      '<span class="event-card__place">' + today.city + '</span>';
    dom.mtEvent.appendChild(head);

    const nameEl = document.createElement('div');
    nameEl.className = 'event-card__name';
    nameEl.textContent = ev.name;

    const metaEl = document.createElement('div');
    metaEl.className = 'event-card__meta';

    const catEl = document.createElement('span');
    catEl.className = 'event-card__category event-card__category--' + ev.category;
    catEl.textContent = ev.category;
    metaEl.appendChild(catEl);

    if (ev.cost > 0) {
      const costEl = document.createElement('span');
      costEl.className = 'event-card__cost';
      costEl.innerHTML = '<strong>' + formatCurrency(ev.cost) + '</strong>';
      metaEl.appendChild(costEl);
    }

    if (ev.bookingId) {
      const booking = getBookingById(ev.bookingId);
      if (booking) {
        const statusEl = document.createElement('span');
        statusEl.className = 'event-card__status event-card__status--' + booking.status;
        statusEl.textContent = booking.status === 'confirmed' ? 'Подтверждено' : 'Ожидание';
        metaEl.appendChild(statusEl);
      }
    }

    dom.mtEvent.appendChild(nameEl);
    dom.mtEvent.appendChild(metaEl);
  }

  // Ближайшее неподтверждённое бронирование
  const pendingBooking = state.bookings.find(b => b.status === 'pending');
  if (pendingBooking) {
    dom.mtBookingCard.innerHTML = '';
    const bTitle = document.createElement('div');
    bTitle.className = 'booking-card__title';
    bTitle.textContent = pendingBooking.title + ' — ' + pendingBooking.detail;

    const bCost = document.createElement('div');
    bCost.className = 'booking-card__cost';
    bCost.textContent = formatCurrency(pendingBooking.cost);

    const bBtn = document.createElement('button');
    bBtn.className = 'booking-confirm-btn';
    bBtn.textContent = 'Подтвердить';
    bBtn.dataset.action = 'confirm';
    bBtn.dataset.bookingId = pendingBooking.id;

    dom.mtBookingCard.appendChild(bTitle);
    dom.mtBookingCard.appendChild(bCost);
    dom.mtBookingCard.appendChild(bBtn);
  } else {
    dom.mtBookingCard.innerHTML = '<div class="checklist-item__text">Все бронирования подтверждены</div>';
  }

  // Следующая задача из чек-листа
  const nextTask = state.checklist.find(c => !c.checked);
  if (nextTask) {
    dom.mtTaskCard.innerHTML = '';
    const tText = document.createElement('div');
    tText.className = 'checklist-item__text';
    tText.textContent = nextTask.text;

    const tCat = document.createElement('span');
    tCat.className = 'checklist-item__cat';
    tCat.textContent = nextTask.category;

    dom.mtTaskCard.appendChild(tText);
    dom.mtTaskCard.appendChild(tCat);
  } else {
    dom.mtTaskCard.innerHTML = '<div class="checklist-item__text" style="color:var(--green)">Все задачи выполнены!</div>';
  }
}

function updateNavState() {
  // Верхняя навигация
  $$('.topnav__btn').forEach(btn => {
    const active = btn.dataset.view === state.activeView;
    btn.classList.toggle('topnav__btn--active', active);
    btn.setAttribute('aria-current', active ? 'page' : 'false');
  });
  // Нижняя навигация
  $$('.bottom-nav__btn').forEach(btn => {
    const active = btn.dataset.view === state.activeView;
    btn.classList.toggle('bottom-nav__btn--active', active);
    btn.setAttribute('aria-current', active ? 'page' : 'false');
  });
  // Показываем только активный вид
  $$('.view').forEach(v => {
    v.classList.toggle('view--active', v.dataset.view === state.activeView);
  });
}

/* --- Toast --- */
function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.remove('hidden');
  dom.toast.style.animation = 'none';
  void dom.toast.offsetHeight;
  dom.toast.style.animation = '';

  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    dom.toast.classList.add('hidden');
  }, 2500);
}

/* ============================================
   7. EVENT HANDLERS
   ============================================ */

function onPaceChange(pace) {
  if (state.pace === pace) return;
  state.pace = pace;
  savePace();
  renderPaceToggle();
  renderDayContent();
  renderBudget();
  renderMobileToday();
}

function onDaySelect(dayIndex) {
  if (state.activeDay === dayIndex) return;
  state.activeDay = dayIndex;
  renderDayTabs();
  renderDayContent();
  renderMobileToday();
}

function onBookingConfirm(bookingId) {
  const booking = state.bookings.find(b => b.id === bookingId);
  if (!booking || booking.status === 'confirmed') return;

  booking.status = 'confirmed';
  saveBookings();
  renderBookings();
  renderBudget();
  renderDayContent();
  renderMobileToday();
  showToast(booking.title + ' подтверждено!');
}

function onChecklistToggle(checkId) {
  const item = state.checklist.find(c => c.id === checkId);
  if (!item) return;
  item.checked = !item.checked;
  saveChecklist();
  renderChecklist();
  renderMobileToday();
}

function onChecklistCategory(cat) {
  state.activeChecklistCat = cat;
  renderChecklist();
}

function onView(view) {
  state.activeView = view;
  updateNavState();
  if (view === 'today') renderMobileToday();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function onReset() {
  resetAllData();
  render();
  showToast('Данные сброшены');
}

function onRetry() {
  state.uiState = 'loading';
  render();
  setTimeout(() => {
    state.uiState = 'success';
    render();
  }, 1200);
}

function onNextDay() {
  // Переходим к следующему дню, где есть события в текущем темпе
  let next = state.activeDay;
  for (let i = 0; i < DAYS_DATA.length; i++) {
    next = (next + 1) % DAYS_DATA.length;
    if (getEvents(next).length > 0) break;
  }
  state.activeDay = next;
  state.uiState = 'success';
  render();
}

function onSwitchPace() {
  state.pace = state.pace === 'calm' ? 'intense' : 'calm';
  savePace();
  state.uiState = 'success';
  render();
}

function onDemoState(uiState) {
  state.uiState = uiState;
  render();
}

function onDemoToggle() {
  state.demoOpen = !state.demoOpen;
  const body = document.querySelector('.demo-panel__body');
  const toggleBtn = document.querySelector('.demo-panel__toggle');
  if (body) body.classList.toggle('demo-panel__body--open', state.demoOpen);
  if (toggleBtn) {
    toggleBtn.textContent = 'Демо состояний ' + (state.demoOpen ? '▼' : '▲');
    toggleBtn.setAttribute('aria-expanded', state.demoOpen ? 'true' : 'false');
  }
}

/* ============================================
   8. EVENT DELEGATION
   ============================================ */

function bindEvents() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;

    switch (action) {
      case 'pace':
        onPaceChange(target.dataset.pace);
        break;
      case 'day':
        onDaySelect(parseInt(target.dataset.day, 10));
        break;
      case 'confirm':
        onBookingConfirm(target.dataset.bookingId);
        break;
      case 'toggle-check':
        onChecklistToggle(target.dataset.checkId);
        break;
      case 'checklist-cat':
        onChecklistCategory(target.dataset.cat);
        break;
      case 'view':
        onView(target.dataset.view);
        break;
      case 'reset':
        onReset();
        break;
      case 'retry':
        onRetry();
        break;
      case 'next-day':
        onNextDay();
        break;
      case 'switch-pace':
        onSwitchPace();
        break;
      case 'demo-state':
        onDemoState(target.dataset.state);
        break;
      case 'demo-toggle':
        onDemoToggle();
        break;
    }
  });

  // Клавиатура: Enter / Space для чек-листа
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const item = e.target.closest('[data-action="toggle-check"]');
    if (!item) return;
    e.preventDefault();
    onChecklistToggle(item.dataset.checkId);
  });
}

/* ============================================
   9. INIT
   ============================================ */

function init() {
  cacheDom();
  loadState();
  bindEvents();

  // По умолчанию показываем «Сегодня» на всех экранах
  state.activeView = 'today';
  updateNavState();

  // Имитация loading перед показом
  state.uiState = 'loading';
  render();

  setTimeout(() => {
    state.uiState = 'success';
    render();
  }, 800);
}

document.addEventListener('DOMContentLoaded', init);
