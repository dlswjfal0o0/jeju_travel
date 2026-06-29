const tripData = {
  title: "우리의 제주 여행",
  accentTitle: "제주 여행",
  dates: "2025.08.14 - 08.17",
  duration: "3박 4일",
  travelers: "2인 여행",
  destination: "제주도",
  description: "항공권과 E티켓, 렌터카 예약 정보, 직접 고른 식사·카페·명소를 한곳에 정리했어요.",
  heroImage: "https://images.unsplash.com/photo-1684042229029-8a899193a8e4?auto=format&fit=crop&w=1920&q=85",
  sections: [
    { id: "flights", label: "항공권", icon: "✈" },
    { id: "rental", label: "렌터카", icon: "🚗" },
    { id: "places", label: "추천 장소", icon: "📍" }
  ],
  flightMemo: "공항 도착은 출발 1시간 30분 전을 권장합니다. E티켓과 신분증을 미리 준비하세요.",
  flights: [
    {
      type: "출국",
      airline: "제주항공 7C101",
      route: "김포 → 제주",
      date: "2025.08.14 (목)",
      depart: "07:30",
      arrive: "08:35",
      duration: "1시간 5분",
      price: "67,400원",
      status: "예약 완료",
      seat: "12A",
      pnr: "K7X2F9",
      tickets: [
        { label: "출국 E티켓", href: "tickets/outbound-ticket.pdf" }
      ]
    },
    {
      type: "귀국",
      airline: "제주항공 7C108",
      route: "제주 → 김포",
      date: "2025.08.17 (일)",
      depart: "19:55",
      arrive: "21:00",
      duration: "1시간 5분",
      price: "72,100원",
      status: "예약 완료",
      seat: "14C",
      pnr: "K7X2F9",
      tickets: [
        { label: "귀국 E티켓", href: "tickets/return-ticket.pdf" }
      ]
    }
  ],
  rentalCar: {
    company: "제주렌터카",
    model: "현대 투싼 (SUV)",
    period: "8.14 - 8.17 (3일)",
    pickupTime: "08.14 09:00",
    returnTime: "08.17 18:00",
    pickupLocation: "제주국제공항 1번 게이트",
    shuttlePlace: "제주국제공항 1층 도착장 왼쪽 렌터카 버스 정류장",
    shuttleMemo: "업체 셔틀버스 탑승 후 영업소로 이동합니다. 약 10-15분 소요 예정입니다.",
    price: "165,000원",
    include: "종합보험 포함 · 무제한 km",
    reservationNo: "JRC-20250814-0042",
    status: "예약 완료"
  },
  routes: [
    { day: "Day 1 · 8.14", route: "공항 → 성산 일출봉 → 우도 → 숙소 체크인", km: "약 85km" },
    { day: "Day 2 · 8.15", route: "한라산 성판악 → 점심 → 산방산 뷰 카페 → 카멜리아힐", km: "약 110km" },
    { day: "Day 3 · 8.16", route: "숙소 체크아웃 → 협재 해수욕장 → 한림공원", km: "약 65km" },
    { day: "Day 4 · 8.17", route: "카페 → 흑돼지거리 점심 → 공항 반납 → 귀국", km: "약 45km" }
  ],
  places: {
    "식사": [
      {
        name: "흑돼지거리 본점",
        category: "흑돼지구이",
        address: "제주시 연동",
        hours: "11:00 - 22:00",
        price: "1인 25,000원~",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=900&q=80",
        desc: "제주 흑돼지 특유의 풍미를 숯불 위에서 즐길 수 있는 저녁 후보입니다.",
        memo: "첫날 저녁 예정"
      },
      {
        name: "성게국수 제주점",
        category: "해물요리",
        address: "서귀포시 대정읍",
        hours: "09:00 - 20:00",
        price: "1인 12,000원",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=900&q=80",
        desc: "성게와 해산물 국물이 진한 점심 후보입니다.",
        memo: "둘째 날 점심"
      }
    ],
    "카페": [
      {
        name: "산방산 뷰 카페",
        category: "오션뷰",
        address: "서귀포시 안덕면",
        hours: "09:00 - 19:00",
        price: "음료 8,500원~",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
        desc: "산방산과 바다가 함께 보이는 오후 휴식 후보입니다.",
        memo: "둘째 날 오후"
      },
      {
        name: "협재 비치 카페",
        category: "비치 카페",
        address: "제주시 한림읍",
        hours: "09:00 - 20:00",
        price: "음료 6,500원~",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
        desc: "협재 해변 앞에서 바다를 보며 쉬기 좋은 카페입니다.",
        memo: "셋째 날 후보"
      }
    ],
    "명소": [
      {
        name: "성산 일출봉",
        category: "세계자연유산",
        address: "서귀포시 성산읍",
        hours: "07:00 - 20:00",
        price: "입장료 5,000원",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
        desc: "분화구와 동쪽 바다 전망을 함께 볼 수 있는 제주 대표 명소입니다.",
        memo: "아침 방문 추천"
      },
      {
        name: "천지연 폭포",
        category: "자연경관",
        address: "서귀포시 천지동",
        hours: "09:00 - 22:00",
        price: "입장료 2,000원",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80",
        desc: "야간 조명 산책까지 고려하기 좋은 폭포 코스입니다.",
        memo: "첫날 저녁 산책"
      }
    ]
  }
};

// ─── 편집 모드 제어 ──────────────────────────────────────────────────────────
// 일반 링크로 접근하면 항상 읽기 전용.
// ?edit=<비밀번호> 파라미터가 있을 때만 편집 모드가 활성화됩니다.
const EDIT_SECRET = "jeju2025"; // 원하는 비밀번호로 변경하세요
const _params = new URLSearchParams(window.location.search);
const IS_EDIT_MODE = _params.get("edit") === EDIT_SECRET;

let activeSection = "flights";
let activePlace = "식사";

const $ = (selector) => document.querySelector(selector);

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

// ─── 섹션 전환 ───────────────────────────────────────────────────────────────
// 탭 클릭 시 해당 섹션만 표시하고 나머지를 숨깁니다.
// IntersectionObserver 없이 동작하므로 스크롤 중 다른 탭이 활성화되는 오류가 없습니다.
function showSection(sectionId) {
  activeSection = sectionId;
  tripData.sections.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) el.hidden = (id !== sectionId);
  });
  // 섹션 교체 시 페이지 상단(탭바)으로 이동
  document.getElementById("sectionTabs")?.scrollIntoView({ block: "nearest" });
  updateTabState();
}

function updateTabState() {
  document.querySelectorAll("[data-section]").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.section === activeSection);
  });
}

function renderShell() {
  $("#navTitle").textContent = tripData.accentTitle;
  $("#navDates").textContent = `${tripData.dates} · ${tripData.duration}`;
  $("#heroImage").src = tripData.heroImage;
  $("#heroImage").alt = tripData.destination;
  $("#heroTitle").innerHTML = `우리의<br><em>${escapeHtml(tripData.accentTitle)}</em>`;
  $("#heroDesc").textContent = tripData.description;
  $("#footerTitle").innerHTML = `${escapeHtml(tripData.accentTitle)} <span style="color: var(--accent)">2025</span>`;
  $("#footerMeta").textContent = `${tripData.dates} · ${tripData.duration} · ${tripData.travelers}`;

  $("#heroMeta").innerHTML = [
    `📅 ${tripData.dates} · ${tripData.duration}`,
    `👥 ${tripData.travelers}`,
    `📍 ${tripData.destination}`
  ].map((item) => `<span class="meta-pill">${escapeHtml(item)}</span>`).join("");

  // 읽기 전용 배지: 편집 모드가 아닐 때 nav에 표시
  const readonlyBadge = IS_EDIT_MODE
    ? ""
    : `<span class="readonly-badge">읽기 전용</span>`;

  const links = tripData.sections.map((section) => `
    <button class="nav-link ${section.id === activeSection ? "is-active" : ""}" type="button" data-section="${section.id}">
      ${section.label}
    </button>
  `).join("");
  $("#navLinks").innerHTML = links + readonlyBadge;
  $("#footerLinks").innerHTML = tripData.sections.map((section) => `
    <button class="footer-link" type="button" data-section="${section.id}">
      ${section.label}
    </button>
  `).join("");

  $("#sectionTabs").innerHTML = tripData.sections.map((section) => `
    <button class="tab-button ${section.id === activeSection ? "is-active" : ""}" type="button" data-section="${section.id}">
      <span>${section.icon}</span>${section.label}
    </button>
  `).join("");
}

function detail(label, value) {
  return `
    <div class="detail">
      <span class="detail-label">${escapeHtml(label)}</span>
      <span class="detail-value">${escapeHtml(value || "-")}</span>
    </div>
  `;
}

function renderFlights() {
  $("#flightMemo").textContent = tripData.flightMemo;
  $("#flightList").innerHTML = tripData.flights.map((flight) => {
    const [from, to] = flight.route.split(" → ");
    const isReturn = flight.type.includes("귀국");
    const tickets = flight.tickets.map((ticket) => `
      <a class="ticket-link" href="${escapeHtml(ticket.href)}" target="_blank" rel="noreferrer">
        ${escapeHtml(ticket.label)}
      </a>
    `).join("");

    return `
      <article class="flight-card ${isReturn ? "return" : ""}">
        <div class="flight-bar">
          <span>${isReturn ? "▼" : "▲"} ${escapeHtml(flight.type)}</span>
          <span class="status-chip">${escapeHtml(flight.status)}</span>
        </div>
        <div class="flight-body">
          <div>
            <div class="route-visual">
              <div class="airport-time">
                <strong>${escapeHtml(flight.depart)}</strong>
                <span>${escapeHtml(from)}</span>
              </div>
              <div class="route-line">
                <span class="duration">${escapeHtml(flight.duration)}</span>
                <span class="plane-line">✈</span>
                <span class="duration">${escapeHtml(flight.date)}</span>
              </div>
              <div class="airport-time">
                <strong>${escapeHtml(flight.arrive)}</strong>
                <span>${escapeHtml(to)}</span>
              </div>
            </div>
            <div class="ticket-row">
              <span class="soft-chip">E티켓</span>
              ${tickets || '<span class="ticket-link is-disabled">첨부 예정</span>'}
            </div>
          </div>
          <div class="detail-grid">
            ${detail("항공편", flight.airline)}
            ${detail("좌석", flight.seat)}
            ${detail("예약번호", flight.pnr)}
            ${detail("요금", flight.price)}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderRental() {
  const car = tripData.rentalCar;
  $("#rentalCard").innerHTML = `
    <article class="rental-card">
      <div class="rental-bar">
        <span>${escapeHtml(car.company)}</span>
        <span class="status-chip">${escapeHtml(car.status)}</span>
      </div>
      <div class="rental-body">
        <div class="info-block">
          <p class="block-title">예약 정보</p>
          ${detail("차량", car.model)}
          ${detail("기간", car.period)}
          ${detail("픽업", `${car.pickupTime} · ${car.pickupLocation}`)}
          ${detail("반납", car.returnTime)}
          ${detail("포함", car.include)}
          ${detail("예약번호", car.reservationNo)}
        </div>
        <div class="info-block">
          <div class="shuttle-box">
            <p class="block-title">셔틀 탑승 장소</p>
            <h3>${escapeHtml(car.shuttlePlace)}</h3>
            <p>${escapeHtml(car.shuttleMemo)}</p>
          </div>
          <div class="price-box">
            <p>총 요금</p>
            <strong>${escapeHtml(car.price)}</strong>
            <p>${escapeHtml(car.include)}</p>
          </div>
        </div>
      </div>
    </article>
  `;

  $("#routeList").innerHTML = tripData.routes.map((route) => `
    <article class="route-card">
      <b>${escapeHtml(route.day)}</b>
      <p>${escapeHtml(route.route)}</p>
      <small>${escapeHtml(route.km)}</small>
    </article>
  `).join("");
}

function renderPlaces() {
  $("#placeTabs").innerHTML = Object.keys(tripData.places).map((name) => `
    <button class="place-tab ${name === activePlace ? "is-active" : ""}" type="button" data-place="${escapeHtml(name)}">
      ${name === "식사" ? "🍽" : name === "카페" ? "☕" : "📷"} ${escapeHtml(name)}
    </button>
  `).join("");

  $("#placeList").innerHTML = tripData.places[activePlace].map((place) => `
    <article class="place-card">
      <div class="place-image-wrap">
        <img src="${escapeHtml(place.image)}" alt="${escapeHtml(place.name)}" loading="lazy" />
        <div class="place-badges">
          <span>${escapeHtml(place.category)}</span>
          <span>★ ${escapeHtml(place.rating)}</span>
        </div>
      </div>
      <div class="place-body">
        <h3>${escapeHtml(place.name)}</h3>
        <p>${escapeHtml(place.desc)}</p>
        ${place.memo ? `<div class="memo-box">📌 ${escapeHtml(place.memo)}</div>` : ""}
        <div class="place-meta">
          <span>📍 ${escapeHtml(place.address)}</span>
          <span>⏱ ${escapeHtml(place.hours)}</span>
          <strong>${escapeHtml(place.price)}</strong>
        </div>
      </div>
    </article>
  `).join("");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    // 섹션 탭 클릭: 해당 섹션만 표시 (IntersectionObserver 불필요)
    const sectionButton = event.target.closest("[data-section]");
    if (sectionButton) {
      event.preventDefault();
      showSection(sectionButton.dataset.section);
      return;
    }

    // 추천 장소 카테고리 탭 클릭
    const placeButton = event.target.closest("[data-place]");
    if (placeButton) {
      activePlace = placeButton.dataset.place;
      renderPlaces();
    }
  });
}

// ─── 초기화 ──────────────────────────────────────────────────────────────────
renderShell();
renderFlights();
renderRental();
renderPlaces();
showSection(activeSection); // 초기 섹션 설정 (항공권만 표시)
bindEvents();
