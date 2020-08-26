// SELECTORS //
const one = document.getElementsByClassName(".1");
const two = document.getElementsByClassName(".2");
const three = document.getElementsByClassName(".3");
const four = document.getElementsByClassName(".4");
const five = document.getElementsByClassName(".5");
const six = document.getElementsByClassName(".6");
const seven = document.getElementById("seven");
const eight = document.getElementsByClassName(".8");
const nine = document.getElementsByClassName(".9");
const plus = document.getElementById("plus");
const minus = document.getElementsByClassName(".minus");
const divide = document.getElementsByClassName(".divided");
const multiply = document.getElementsByClassName(".multiply");
const output = document.getElementById("current-output");
const history = document.getElementById("history-output");
const decimal = document.getElementById("decimal");

let outputVal = "";
let currentOpertion = 0;
let evalOperation = [];

function inputNumber(number) {
  if (outputVal == 0) {
    output.innerHTML = "";
  }
  let numbers = number.value;
  output.innerHTML += numbers;
  console.log(output.innerHTML, "innerHTML");
  //   outputVal += numbers;
  outputVal = output.innerHTML;
  console.log(outputVal, "outputVal");
}

function inputMath(sign) {
  let operator = sign.value;
  console.log(operator);

  switch (operator) {
    case "+":
      currentOperation = outputVal;
      outputVal = "";
      //   output.innerHTML = "0";
      //   output.innerHTML = outputVal;
      output.innerHTML = currentOpertion;
      console.log(currentOperation);
      evalOperation.push(currentOperation);
      evalOperation.push("+");
      history.innerHTML = evalOperation.join(" ");
      break;
    case "=":
      console.log(outputVal, "output Val");
      evalOperation.push(outputVal);
      let evaluation = eval(evalOperation.join(" "));
      outputVal = evaluation + "";
      console.log(evaluation, "EVALULATION");
      //   output.innerHTML = outputVal;
      //   output.innerHTML = currentOpertion;
      output.innerHTML = evaluation;
      history.innerHTML = evalOperation.join(" ");
      evalOperation = [];
      history.innerHTML = evalOperation.join(" ");
      break;
  }
}

function clearMath() {
  outputVal = "";
  output.innerHTML = 0;
  history.innerHTML = "";
  currentOpertion = 0;
  evalOperation = [];
}

function inputDelete() {
  let outputLength = outputVal.length;
  if (
    (output.innerHTML === "" && outputVal === "") ||
    outputLength == 1 ||
    outputLength == 0
  ) {
    output.innerHTML = "0";
    outputVal = "0";
    console.log(outputLength, "OUTPUT LENGTH");
    console.log(outputVal, "outputVal on Delete");
    console.log(output.innerHTML, "outputHTML on Delete");
  } else {
    console.log(outputLength, "OUTPUT LENGTH");
    console.log(outputVal, "outputVal on Delete");
    console.log(output.innerHTML, "outputHTML on Delete");
    let deletedVal = outputVal.slice(0, outputLength - 1);
    let deletedOutput = output.innerHTML.slice(0, outputLength - 1);
    outputVal = deletedVal;
    output.innerHTML = deletedOutput;
  }
}

function inputDecimal(decimals) {
  let decimalx = decimals.value;
  if (!output.innerHTML.includes(".")) {
    output.innerHTML += decimalx;
    outputVal += decimalx;
  }
  alert("Invalid Decimal");
}

// function inputNumber(number) {
//   if (!secondNumberInputed) {
//     secondNumberInputed = false;
//     let numberx = number.value;
//     output.innerHTML += numberx;
//     console.log("false");
//   } else {
//     secondNumberInputed = true;
//     console.log("true1");
//   }
//   if (secondNumberInputed === true) {
//     console.log("true2");
//     output.innerHTML = "empty";
//     let numbery = number.value;
//     output.innerHTMLnumbery);
//   }
// }

// let secondNumberInputed = false;
// let firstNumber = "";
// let secondNumber = "";
// let currentMath = "";
// let historyMath = "";
// let operator = "";
// function inputNumber(number) {
//   if (secondNumberInputed === false) {
//     let numberx = number.value;
//     firstNumber += numberx;
//     output.innerHTML = firstNumber;
//   } else if (secondNumberInputed === true) {
//     let numberx = number.value;
//     secondNumber += numberx;
//     output.innerHTML = secondNumber;
//   }
// }
// let i = 0;
// function inputMath(sign) {
//   let signx = sign.value;
//   operator += signx;
//   if (secondNumberInputed === false) {
//     secondNumberInputed = true;
//   } else if (secondNumberInputed === true) {
//     secondNumberInputed = false;
//     currentMath = eval(
//       historyMath + parseInt(firstNumber) + operator[i] + parseInt(secondNumber)
//     );
//     i++;
//     historyMath = currentMath + operator[i];
//     console.log(historyMath, "historyMath");
//     console.log(firstNumber, "firstNumber");
//     console.log(secondNumber, "secondNumber");
//     currentMath = "";
//     firstNumber = "";
//     secondNumber = "";
//     console.log(currentMath, "currentMath");
//   }
// }
// function nextNumber() {
//   if (output.innerHTML.includes(" ") && inputNumber(number)) {
//     output.innerHTML = " ";
//   }
// }

// let math = inputMath(sign);
// switch (expression) {
//   case "plus":
//     currentNumber + secondNumber;
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     console.log("nothing");
// }
