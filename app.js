const tripData = {
  title: "제주 여행",
  accentTitle: "제주 여행",
  dates: "2026.07.06. - 07.08.",
  duration: "2박 3일",
  travelers: "3인 여행",
  destination: "제주도",
  description: "항공권과 렌터카 예약 정보, 직접 고른 식사·카페·명소를 한곳에 정리했어요.",
  heroImage: "https://images.unsplash.com/photo-1684042229029-8a899193a8e4?auto=format&fit=crop&w=1920&q=85",
  sections: [
    { id: "flights", label: "항공권", icon: "✈" },
    { id: "rental", label: "렌터카", icon: "🚗" },
    { id: "places", label: "추천 장소", icon: "📍" }
  ],
  flightMemo: "공항 도착은 출발 1시간 30분 전을 권장합니다. 탑승권과 신분증을 미리 준비하세요. 오토체크인 예약 완료 → 탑승 24시간 전 자동 체크인됩니다.",
  flights: [
    {
      type: "Go",
      airline: "대한항공 KE1023",
      route: "김포 GMP → 제주 CJU",
      date: "2026.07.06. (월)",
      depart: "07:20",
      arrive: "08:35",
      duration: "1시간 15분",
      status: "예약 완료",
      seat: "55A, 55B, 55C",
      pnr: "FH6P9Q",
    },
    {
      type: "Back",
      airline: "대한항공 KE1314",
      route: "제주 CJU → 김포 GMP",
      date: "2026.07.08. (수)",
      depart: "19:55",
      arrive: "21:10",
      duration: "1시간 15분",
      status: "예약 완료",
      seat: "50D, 50E, 50F",
      pnr: "FHED6J",
    }
  ],
  rentalCar: {
    company: "제주 신동아렌터카",
    model: "더 뉴 아반떼 CN7(26년~)HEV",
    period: "7.06. - 7.08. (2.38일)",
    pickupTime: "07.06. 09:30",
    returnTime: "07.08. 18:30",
    shuttlePlace: "제주국제공항 1층 5번 게이트 건너편 우측 (구)렌터카하우스 셔틀 정류장 [6구역 바닥숫자 4번]",
    shuttleMemo: "업체 셔틀버스 탑승 후 영업소로 이동합니다. 약 10-15분 소요 예정입니다.",
    include: "종합보험(완전자차) 포함 · 무제한 km",
    status: "예약 완료"
  },
  places: {
    "식사": [
      {
        name: "몽탄 제주점",
        category: "고기",
        address: "제주시 구좌읍 동복로 83 1층",
        hours: "11:30 - 21:00 (20:00 라스트오더)",
        rating: "4.4",
        image: "https://image.mom-mom.net/eyJrZXkiOiJwbGFjZXMvNjg2ZjI3NWMzZTNkZTY0YjdlOWU4NWJlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzQyLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9fX0=",
        desc: "인기 메뉴인 우대갈비는 두퉁한 갈빗대에 부드러운 고기와 풍부한 육즙이 특징이며, 짚불 향이 은은하게 배어 있어 풍미가 뛰어납니다. 직원분이 직접 고기를 구워주셔서 편리하며, 트러플 계란찜과 제주 특산물을 활용한 게우솥밥도 인기 메뉴입니다.",
      },
      {
        name: "우동카덴",
        category: "일식",
        address: "제주시 조천읍 교래3길 23",
        hours: "10:00 - 18:00 (화•수 정기휴무 / 17:00 라스트오더)",
        rating: "3.9",
        image: "https://d12zq4w4guyljn.cloudfront.net/750_750_20260506091525_photo1_d8d8dcf15d07.webp",
        desc: "쫄깃한 생면과 깊은 육수가 조화로운 우동을 제공하는 식당으로, 흑돼지우동•카레우동•명란크림우동 등 다양한 메뉴가 준비되어 있습니다.",
      },
      {
        name: "블루크랩 함덕점",
        category: "크랩",
        address: "제주시 조천읍 함덕로 40 3층 301호",
        hours: "12:00 - 21:30 (화 정기휴무 / 15:00 - 16:30 브레이크타임 / 20:15 라스트오더)",
        rating: "4.4",
        image: "https://mblogthumb-phinf.pstatic.net/MjAyNjAxMDRfMTI5/MDAxNzY3NTMwMzc3ODE3.1kcCtCkLxS8q-qyvl2iu9K0jn6pT8BV4iI_dA3dH7mkg.T6kT4HGe7Qf6EATjeQtWUdRIS0syYQmJY-VEG8qwnNEg.JPEG/SE-692887e3-dbca-40cd-bfd4-36137266deb4.jpg?type=w800",
        desc: "신선한 해산물을 활용한 보일링 크랩 요리가 특징입니다.",
      },
      {
        name: "청초수물회 제주점",
        category: "물회",
        address: "제주시 애월읍 일주서로 6113",
        hours: "10:30 - 20:30 (19:50 라스트오더)",
        rating: "4.6",
        image: "https://ugc-images.catchtable.co.kr/shop/manager/images/72b5a269cdeb4c59b396e0db739f4695?resizeType=details500",
        desc: "고급스럽고 정갈하게 내어지는 물회가 대표적이며, 고소한 맛의 전복죽도 인기가 많습니다.",
      }
    ],
    "카페": [
      {
        name: "해지개",
        category: "오션뷰",
        address: "제주시 애월읍 애월북서길 52 1~2층",
        hours: "09:00 - 21:00 (20:20 라스트오더)",
        rating: "4.8",
        image: "https://blog.kakaocdn.net/dna/btnbHs/btsn0DAIoZB/AAAAAAAAAAAAAAAAAAAAAIMQP92KJDaP7w8ZbBhw6MM6-uVpB2iaMoIEf82MCBYN/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1782831599&allow_ip=&allow_referer=&signature=VE3Fl9H0We6dERzRegUuV5ZmDnI%3D",
        desc: "흑임자라떼, 아인쑥패너, 넛츠크림라떼 등 시그니처 음료와 함께 초당옥수수 데니쉬, 치즈수플레 등 다양한 베이커리를 즐길 수 있습니다.",
      },
      {
        name: "수퍼플라워",
        category: "꽃밭 속 오션뷰",
        address: "제주시 구좌읍 동복로 85 지하1층",
        hours: "09:00 - 19:00 (18:30 라스트오더)",
        rating: "3.8",
        image: "https://api.cdn.visitjeju.net/photomng/imgpath/202510/24/d19a817a-3eaf-4eaf-9850-7216cf5e8398.webp",
        desc: "꽃을 모티브로 한 음료와 디저트가 특징입니다.",
      },
      {
        name: "델문도",
        category: "오션뷰",
        address: "제주시 조천읍 조함해안로 519-10",
        hours: "06:00 - 24:00",
        rating: "4.1",
        image: "https://mblogthumb-phinf.pstatic.net/MjAyMTAzMjZfODgg/MDAxNjE2NzI2OTI3MDYy.sicbaZbeyLMte8EvA-iTYe-FWcNpvpWg8bZmoNf1ZWIg.KlujjGRCwFgSE2p-aufJuU1zdFgGWmiRRfwS_ZUEWxYg.JPEG.28ssan/SE-489edfa3-aa78-4334-8c17-4eadd5bd5790.jpg?type=w800",
        desc: "고메버터 소금빵, 우도 땅콩빵, 라봉슈 등 다양한 베이커리와 말차라떼, 청귤피치에이드 등 음료 메뉴가 인기입니다.",
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
// renderShell()을 재호출해 nav/tab is-active 상태를 항상 동기화합니다.
function showSection(sectionId) {
  activeSection = sectionId;

  // 활성 섹션만 표시 (CSS [hidden] { display: none !important } 와 함께 동작)
  tripData.sections.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) el.hidden = (id !== sectionId);
  });

  // 탭 버튼·nav 링크의 is-active 상태를 renderShell()로 다시 그림
  renderShell();

  // 탭바가 보이는 위치로 스크롤 (상단 고정 nav + 탭바 높이 고려)
  window.scrollTo({ top: 0, behavior: "instant" });
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
  $("#flightList").innerHTML = tripData.flights.map((flight) => {
    const [from, to] = flight.route.split(" → ");
    const isReturn = flight.type.includes("귀국");

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
// renderFlights/renderRental/renderPlaces 먼저 실행 후 showSection으로 초기 탭 설정.
// showSection 내부에서 renderShell()을 호출하므로 별도 호출 불필요.
renderFlights();
renderRental();
renderPlaces();
showSection(activeSection); // 항공권 탭 기본 표시 + renderShell() 포함
bindEvents();
