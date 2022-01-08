const button = document.querySelector(".button");
const bodyColor = document.querySelector(".body-color");
const container = document.querySelector(".container");

// console.log("#" + p.slice(0, 6));

button.addEventListener("click", function () {
  let p = (Math.random() * 0xfffff * 1000000).toString(16);
  let pee = "#" + p.slice(0, 6);
  bodyColor.innerHTML = pee;
  container.style.backgroundColor = pee;
});

function changeColor() {
  let hexNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexCode = "";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexNumbers.length);
    hexCode += hexNumbers[randomIndex];
  }
  console.log(hexCode);
}

changeColor();
