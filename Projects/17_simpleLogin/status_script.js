let timer = null;
let currentVersion = "";
export const state = {
  currentVersion: null
};

// Chỉ lấy version hiện tại
async function loadCurrentVersion() {
  const res = await fetch(
    `data.json?t=${Date.now()}`,
    { cache: "no-store" }
  );

  const json = await res.json();

  state.currentVersion = json.version;

  document.getElementById("status").innerHTML =
    `Version hiện tại: ${state.currentVersion }`;
}

// Check deploy
async function checkDeploy() {
  const res = await fetch(
    `data.json?t=${Date.now()}`,
    { cache: "no-store" }
  );

  const json = await res.json();

  if (json.version !== state.currentVersion) {
    document.getElementById("status").innerHTML =
      `✅ Deploy xong! Version mới: ${json.version}`;

    clearInterval(timer);
    timer = null;
  } else {
    document.getElementById("status").innerHTML =
      `⏳ Đang chờ deploy... (${state.currentVersion})`;
  }
}

// Khi bấm Refresh
document.getElementById("refreshBtn").addEventListener("click", () => {
  if (timer) return; // tránh tạo nhiều interval

  document.getElementById("status").innerHTML =
    `⏳ Đang chờ deploy... (${state.currentVersion})`;

  timer = setInterval(checkDeploy, 5000);
});

// Chỉ chạy 1 lần lúc mở trang
loadCurrentVersion();