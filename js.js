const body = document.querySelector("body");

const values = ["", "", "o", "", "", "", "", "x", "x"];

// .AddEventListener("click", x);

// let xChoice = (argument, argument1) => {
//   values[argument] = "X";
//   console.log(argument);
//   console.log(values);
//   argument1.innerHTML = "X";
// };

let Checker = (x, o) => {
  const counting = {
    x: "",
    o: "",
  };
  values.forEach((x) => {
    counting[x] = (counting[x] || 0) + 1;
  });
  console.log(counting);
  //   if (x > o) {
  //     xChoice(argument, argument1);
  //   } else {
  //     if (o > x) {
  //       oChoice(argument, argument1);
  //     }
  //   }
};
// let oChoice = (argument, argument1) => {
//   values[argument] = "O";
//   console.log(argument);
//   console.log(values);
//   argument1.innerHTML = "O";
// };

values.forEach((n, i) => {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = values[i];
  body.appendChild(cell);
  cell.addEventListener("click", Checker());
  //   cell.addEventListener("click", () => oChoice(i, cell));
});
