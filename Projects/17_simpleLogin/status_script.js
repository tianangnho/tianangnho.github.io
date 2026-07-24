<script>
let currentVersion = null;

async function checkDeploy() {
  const res = await fetch(
    `data.json?t=${Date.now()}`,
    { cache: "no-store" }
  );

  const json = await res.json();

  if (currentVersion === null) {
    currentVersion = json.version;
    document.getElementById("status").innerHTML =
      `Version hiện tại: ${currentVersion}`;
    return;
  }

  if (json.version !== currentVersion) {
    document.getElementById("status").innerHTML =
      `✅ Deploy xong! Version mới: ${json.version}`;
  } else {
    document.getElementById("status").innerHTML =
      `⏳ Đang chờ deploy... (${currentVersion})`;
  }
}

checkDeploy();
setInterval(checkDeploy, 5000);
</script>