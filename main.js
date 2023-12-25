const smallScreen = document.querySelector("#history");
const bigScreen = document.querySelector("#currentOperation");

const acButton = document.querySelector("#acButton");
const delButton = document.querySelector("#delButton");

const divideOperand = document.querySelector("#divideOperand");
const multiplyOperand = document.querySelector("#multiplyOperand");
const sumOperand = document.querySelector("#sumOperand");
const substractOperand = document.querySelector("#substractOperand");
const resultOperand = document.querySelector("#result");
const point = document.querySelector("#point");

const number0 = document.querySelector("#number0"),
  number1 = document.querySelector("#number1"),
  number2 = document.querySelector("#number2"),
  number3 = document.querySelector("#number3"),
  number4 = document.querySelector("#number4"),
  number5 = document.querySelector("#number5"),
  number6 = document.querySelector("#number6"),
  number7 = document.querySelector("#number7"),
  number8 = document.querySelector("#number8"),
  number9 = document.querySelector("#number9");

// operands

sumOperand.addEventListener("click", () => {
  bigScreen.innerHTML += " + ";
  smallScreen.innerHTML = bigScreen.innerHTML;
  bigScreen.innerHTML = '';
});



// all clear button

const allClear = () => {
  smallScreen.innerHTML = "";
  bigScreen.innerHTML = "";
};

acButton.addEventListener("click", allClear);

// delete button

delButton.addEventListener("click", () => {
  if (bigScreen.innerHTML.length > 0) {
    bigScreen.innerHTML = bigScreen.innerHTML.slice(0, -1);
  } else {
    allClear();
  }
});

// equal buttons

resultOperand.addEventListener("click", () => {
  
});

// numbers event listeners

number0.addEventListener("click", () => {
  bigScreen.innerHTML += "0";
});

number1.addEventListener("click", () => {
  bigScreen.innerHTML += "1";
});

number2.addEventListener("click", () => {
  bigScreen.innerHTML += "2";
});

number3.addEventListener("click", () => {
  bigScreen.innerHTML += "3";
});

number4.addEventListener("click", () => {
  bigScreen.innerHTML += "4";
});

number5.addEventListener("click", () => {
  bigScreen.innerHTML += "5";
});

number6.addEventListener("click", () => {
  bigScreen.innerHTML += "6";
});

number7.addEventListener("click", () => {
  bigScreen.innerHTML += "7";
});

number8.addEventListener("click", () => {
  bigScreen.innerHTML += "8";
});

number9.addEventListener("click", () => {
  bigScreen.innerHTML += "9";
});
