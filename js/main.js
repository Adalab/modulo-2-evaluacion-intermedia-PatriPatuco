'use strict'

const userNumber = document.querySelector(".js-in-number");
const buttonTry = document.querySelector(".js-button-try");
const errorMessage = document.querySelector(".js-error-message");
const numberTip = document.querySelector(".js-in-tip");
const numberTries = document.querySelector(".js-in-tries");


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function renderNumberTry() {
    const userNumberValue = parseInt(userNumber.value);
    const numberTipValue = numberTip.value;
    if (userNumberValue < randomNumber) {
      numberTipValue.innerHTML = "Demasiado bajo";
    } else if (userNumberValue === randomNumber) {
      numberTipValue.innerHTML = "Has ganado campeona!!!";
    } else {
      numberTipValue.innerHTML = "Demasiado alto";
    }
}



function handleButtonTry(event) {
  event.preventDefault();
  if (
    userNumber.value === "" ||
    userNumber.value > 100 ||
    userNumber.value < 0
  ) {
    errorMessage.innerHTML = `El número debe estar entre 1 y 100`;
  } else {
    renderNumberTry();
  }
}

buttonTry.addEventListener("click", handleButtonTry);