function createTable() {
    // Get a reference to the body element
    const body = document.body;
  
    // Create the table element
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.border = '1px solid black';
  
    // Create rows and cells
    for (let i = 0; i < 3; i++) {
      const row = table.insertRow();
      for (let j = 0; j < 2; j++) {
        const cell = row.insertCell();
        cell.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
        cell.style.border = '1px solid black';
  
        // Set rowspan for the second cell in the second row
        if (i === 1 && j === 1) {
          cell.setAttribute('rowSpan', '2');
        }
      }
    }
}