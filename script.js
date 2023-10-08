function insert_Row() {
    const table = document.getElementById("sampleTable")

let Row = document.createElement("tr")
let Td1 = document.createElement("td")
Td1.innerText = "New Cell1"
let Td2 = document.createElement("td")
Td2.innerText = "New Cell2"
Row.appendChild(Td1);
Row.appendChild(Td2);

  const firstRow = table.querySelector("tr");

  table.querySelector("tbody").insertBefore(Row, firstRow);
}
