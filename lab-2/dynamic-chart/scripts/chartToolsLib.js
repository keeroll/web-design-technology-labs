var tableData = [];

// source: https://gist.github.com/Chak10/dc24c61c9bf2f651cb6d290eeef864c1
function randomDarkColor() {
    let lum = -0.25;
    let hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    let rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }
    return rgb;
}
  
function animate() {
    let bars = document.getElementById("mainChart").getElementsByClassName("chart-animation");
    const barsLength = bars.length;
    let maxHeight = 0;

    tableData.forEach(item => {
        let tmpHeight = item[1];
        maxHeight = tmpHeight >= maxHeight ? tmpHeight : maxHeight;
    });

    for (let i = 0; i < barsLength; i++) {
        let tableDataHeight = (tableData[i][1] * 100) / maxHeight;
        bars[i].style.height = tableDataHeight + "%";
    }
}
  
function drawChart() {
    let container = document.getElementById("mainChart");
    let bar = document.createElement("div");
    bar.classList.add("chart-cell");
  
    let inbar = document.createElement("div");
    inbar.classList.add("chart-animation");

    tableData.forEach(item => {
        inbar.style = "background-color: " + randomDarkColor() + "; height: 0;";
        inbar.innerHTML = item[0];
  
        bar.appendChild(inbar);
        container.appendChild(bar);
    });

    setTimeout(animate, 200);
}

function deleteRow(element) {
    while (element.parentNode && element.tagName.toLowerCase() != 'tr') {
        element = element.parentNode;
    }

    if (element.parentNode && element.parentNode.rows.length > 2) {
        element.parentNode.removeChild(element);
        drawChart();
    }
}

function addRow() {
    let table = document.getElementById("mainTable");

    if (!table) return;

    const tableDataLength = tableData.length;
    let nameValue = document.getElementById("nameCell").value;
    let ratingValue = document.getElementById("ratingCell").value;

    tableData.push([nameValue, ratingValue]);

    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    let deleteButton = document.createElement("input");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "Delete row");
    deleteButton.setAttribute("onclick", "deleteRow(this);");

    

    for (let i = 0; i < tableDataLength; i++) {
        newCell.appendChild(deleteButton);
        for (let j = 0; j < 2; j++) {
            let text = document.createTextNode(tableData[i][j]);
            newCell.appendChild(text);
            newRow.appendChild(newCell);
        }
        
        
    }
    table.appendChild(newRow);
    drawChart();
}