const smallScreen = document.querySelector("#history");
const bigScreen = document.querySelector("#currentOperation");

const acButton = document.querySelector("#acButton");
const delButton = document.querySelector("#delButton");

const divideOperand = document.querySelector("#divideOperand");
const multiplyOperand = document.querySelector("#multiplyOperand");
const substractOperand = document.querySelector("#substractOperand");
const sumOperand = document.querySelector("#sumOperand")
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

function addOperand(operand) {
  smallScreen.innerHTML = bigScreen.innerHTML += ` ${operand} `;
  bigScreen.innerHTML = "";
};

divideOperand.addEventListener("click", () => {
  if (smallScreen.innerHTML == '') {
    addOperand('/');
  } if (bigScreen.innerHTML == '') {
  } else {
    operate();
    addOperand('/');
  }
});

multiplyOperand.addEventListener("click", () => {
  if (smallScreen.innerHTML == '') {
    addOperand('*');
  } if (bigScreen.innerHTML == '') {
  } else {
    operate();
    addOperand('*');
  }
});

substractOperand.addEventListener("click", () => {
  if (smallScreen.innerHTML == '') {
    addOperand('-');
  } if (bigScreen.innerHTML == '') {
  } else {
    operate();
    addOperand('-');
  }
});

sumOperand.addEventListener("click", () => {
  if (smallScreen.innerHTML == '') {
    addOperand('+');
  } if (bigScreen.innerHTML == '') {
  } else {
    operate();
    addOperand('+');
  }
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

// equal button

function getNumbers(arg) {
  return parseFloat(arg.split(" "));
}

function operate() {
  /* segregates thhe numbers from smallScreen and then returns the operation */
  let operation = smallScreen.innerHTML.charAt(
    smallScreen.innerHTML.length - 2
  );
  switch (operation) {
    case "+":
      let sumBefore = bigScreen.innerHTML;
      bigScreen.innerHTML =
        getNumbers(smallScreen.innerHTML) + parseFloat(bigScreen.innerHTML);
      smallScreen.innerHTML += sumBefore;
      break;
    case "-":
      let substractBefore = bigScreen.innerHTML;
      bigScreen.innerHTML =
        getNumbers(smallScreen.innerHTML) - parseFloat(bigScreen.innerHTML);
      smallScreen.innerHTML += substractBefore;
      break;
    case "*":
      let multiplyBefore = bigScreen.innerHTML;
      bigScreen.innerHTML =
        getNumbers(smallScreen.innerHTML) * parseFloat(bigScreen.innerHTML);
      smallScreen.innerHTML += multiplyBefore;
      break;
    case "/":
      let divideBefore = bigScreen.innerHTML;
      bigScreen.innerHTML =
        getNumbers(smallScreen.innerHTML) / parseFloat(bigScreen.innerHTML);
      smallScreen.innerHTML += divideBefore;
      break;
  }
}

resultOperand.addEventListener("click", () => {
  if (bigScreen.innerHTML == '') {
    bigScreen.innerHTML = getNumbers(smallScreen.innerHTML);
  } else {
    operate();
  }
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
