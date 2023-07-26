const body = document.querySelector("body");

const values = ["", "", "", "", "", "", "", "", ""];

values.forEach((n, i) => {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = values[i];
  body.appendChild(cell);
});
