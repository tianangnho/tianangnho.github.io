document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    //initLoader();
  } else if (event.target.readyState === "complete") {
    loadData();
  }
});
function createTable(rows, cols, headers) {
  // Get a reference to the body element
  const body = document.body;

  // Create the table element
  const table = document.createElement('table');
  table.style.width = '100%';

  //Create head
  var header = table.createTHead()
  var hrow = header.insertRow(0);
  for (let h = 0; h < headers.length; h++) {
    var hcell = hrow.insertCell();
    hcell.appendChild(document.createTextNode(headers[h]));
  }
  // Create rows and cells
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
    }
  }
  // Append the table to the body
  body.appendChild(table);
}

function loadData() {
  window.addEventListener("load", () => {
    fetch('js/data.json')
      .then((res) => res.text())
      .then((text) => {
        const obj = JSON.parse(text);
        var map = new Map(Object.entries(obj));
        var headers = ["Item", "Issue", "Summary",
          "Priority", "Urgent", "Time", "Deadline"];
        createTable(map.size * 6, 7, headers);
      });
  });
}