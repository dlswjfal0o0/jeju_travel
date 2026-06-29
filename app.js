const storageKey = "tripDeskData.v1";

const placeImages = {
  "식사": "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80')",
  "카페": "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80')",
  "명소": "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80')",
  "쇼핑": "url('https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=80')",
  "기타": "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80')"
};

const defaultData = {
  tripName: "",
  tripDates: "",
  flights: [
    {
      route: "인천 ICN → 목적지 공항",
      flightNo: "편명 입력",
      depart: "",
      arrive: "",
      bookingNo: "",
      seat: "",
      note: "체크인 마감 시간과 터미널을 확인하세요."
    }
  ],
  tickets: [],
  car: {
    company: "",
    bookingNo: "",
    carType: "",
    pickupTime: "",
    returnTime: "",
    contact: "",
    requirements: "",
    shuttlePlace: "",
    shuttleMemo: ""
  },
  places: [
    {
      category: "식사",
      name: "현지 맛집 후보",
      area: "숙소 근처",
      priority: "꼭 가기",
      note: "대표 메뉴와 브레이크 타임을 메모하세요."
    },
    {
      category: "카페",
      name: "전망 좋은 카페",
      area: "해변 / 중심가",
      priority: "시간 되면",
      note: "이동 동선에 맞으면 들르기."
    },
    {
      category: "명소",
      name: "대표 관광지",
      area: "시내",
      priority: "후보",
      note: "입장권 예약 여부 확인."
    }
  ]
};

let data = loadData();
let activeFilter = "전체";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return {
      ...structuredClone(defaultData),
      ...saved,
      car: { ...defaultData.car, ...(saved?.car || {}) }
    };
  } catch {
    return structuredClone(defaultData);
  }
}

function saveData() {
  localStorage.setItem(storageKey, JSON.stringify(data));
  render();
}

function formatDate(value) {
  if (!value) return "일시 미정";
  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function render() {
  $("#tripName").value = data.tripName;
  $("#tripDates").value = data.tripDates;
  $("#heroTitle").textContent = data.tripName ? `${data.tripName} 준비 노트` : "출발 전 필요한 정보를 정돈하세요.";
  $("#heroSubtitle").textContent = data.tripDates ? `${data.tripDates} 일정의 핵심 정보를 한곳에 모았습니다.` : "항공권과 E티켓, 렌터카 셔틀 위치, 식사와 카페 후보를 함께 관리할 수 있습니다.";
  $("#flightCount").textContent = data.flights.length;
  $("#ticketCount").textContent = data.tickets.length;
  $("#placeCount").textContent = data.places.length;
  renderFlights();
  renderTickets();
  renderCar();
  renderPlaces();
}

function renderFlights() {
  $("#flightList").innerHTML = data.flights.map((flight, index) => `
    <article class="info-card">
      <header>
        <div>
          <h3>${escapeHtml(flight.route)}</h3>
          <p class="meta-line">${escapeHtml(flight.flightNo || "편명 미정")}</p>
        </div>
        <button class="delete-btn" type="button" data-delete-flight="${index}" aria-label="항공 일정 삭제">×</button>
      </header>
      <p><strong>출발</strong> ${formatDate(flight.depart)}</p>
      <p><strong>도착</strong> ${formatDate(flight.arrive)}</p>
      <p><strong>예약번호</strong> ${escapeHtml(flight.bookingNo || "-")}</p>
      <p><strong>좌석/수하물</strong> ${escapeHtml(flight.seat || "-")}</p>
      <p class="meta-line">${escapeHtml(flight.note || "")}</p>
    </article>
  `).join("");

  $$("[data-delete-flight]").forEach((button) => {
    button.addEventListener("click", () => {
      data.flights.splice(Number(button.dataset.deleteFlight), 1);
      saveData();
    });
  });
}

function renderTickets() {
  $("#ticketList").innerHTML = data.tickets.length ? data.tickets.map((ticket, index) => `
    <div class="file-row">
      <span>${escapeHtml(ticket.name)}</span>
      <a href="${ticket.url}" target="_blank" rel="noreferrer">열기</a>
      <button class="delete-btn" type="button" data-delete-ticket="${index}" aria-label="E티켓 삭제">×</button>
    </div>
  `).join("") : `<p class="hint">아직 첨부한 E티켓이 없습니다.</p>`;

  $$("[data-delete-ticket]").forEach((button) => {
    button.addEventListener("click", () => {
      data.tickets.splice(Number(button.dataset.deleteTicket), 1);
      saveData();
    });
  });
}

function renderCar() {
  Object.entries(data.car).forEach(([key, value]) => {
    const field = $(`#carForm [name="${key}"]`);
    if (field) field.value = value || "";
  });
  $("#shuttlePlace").value = data.car.shuttlePlace || "";
  $("#shuttleMemo").value = data.car.shuttleMemo || "";
}

function renderPlaces() {
  const places = activeFilter === "전체" ? data.places : data.places.filter((place) => place.category === activeFilter);
  $("#placeList").innerHTML = places.map((place) => {
    const index = data.places.indexOf(place);
    return `
      <article class="place-card" style="--place-image: ${placeImages[place.category] || placeImages["기타"]}">
        <header>
          <div>
            <span class="badge">${escapeHtml(place.category)} · ${escapeHtml(place.priority)}</span>
            <h3>${escapeHtml(place.name)}</h3>
            <p class="meta-line">${escapeHtml(place.area || "지역 미정")}</p>
          </div>
          <button class="delete-btn" type="button" data-delete-place="${index}" aria-label="장소 삭제">×</button>
        </header>
        <p>${escapeHtml(place.note || "메모를 추가하세요.")}</p>
      </article>
    `;
  }).join("") || `<p class="hint">이 분류에 등록된 장소가 없습니다.</p>`;

  $$("[data-delete-place]").forEach((button) => {
    button.addEventListener("click", () => {
      data.places.splice(Number(button.dataset.deletePlace), 1);
      saveData();
    });
  });
}

function formToObject(form) {
  return Object.fromEntries(new FormData(form).entries());
}

$$(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    $$(".tab").forEach((button) => button.classList.remove("is-active"));
    $$(".tab-panel").forEach((panel) => panel.classList.remove("is-active"));
    tab.classList.add("is-active");
    $(`#${tab.dataset.tab}`).classList.add("is-active");
  });
});

$$(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    activeFilter = filter.dataset.filter;
    $$(".filter").forEach((button) => button.classList.remove("is-active"));
    filter.classList.add("is-active");
    renderPlaces();
  });
});

$("#tripName").addEventListener("input", (event) => {
  data.tripName = event.target.value;
  saveData();
});

$("#tripDates").addEventListener("input", (event) => {
  data.tripDates = event.target.value;
  saveData();
});

$("#flightForm").addEventListener("submit", (event) => {
  event.preventDefault();
  data.flights.push(formToObject(event.currentTarget));
  event.currentTarget.reset();
  saveData();
});

$("#placeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  data.places.push(formToObject(event.currentTarget));
  event.currentTarget.reset();
  saveData();
});

$("#ticketInput").addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []);
  files.forEach((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      data.tickets.push({
        name: file.name,
        size: file.size,
        url: reader.result
      });
      saveData();
    });
    reader.readAsDataURL(file);
  });
  event.target.value = "";
});

$("#addFlight").addEventListener("click", () => {
  $("#flightForm input[name='route']").focus();
});

$("#addPlace").addEventListener("click", () => {
  $("#placeForm input[name='name']").focus();
});

$("#saveCar").addEventListener("click", () => {
  data.car = {
    ...formToObject($("#carForm")),
    shuttlePlace: $("#shuttlePlace").value,
    shuttleMemo: $("#shuttleMemo").value
  };
  saveData();
});

$("#exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${data.tripName || "trip-desk"}.json`;
  link.click();
  URL.revokeObjectURL(url);
});

$("#clearBtn").addEventListener("click", () => {
  if (!confirm("저장된 여행 정보를 모두 초기화할까요?")) return;
  data = structuredClone(defaultData);
  localStorage.removeItem(storageKey);
  render();
});

render();
