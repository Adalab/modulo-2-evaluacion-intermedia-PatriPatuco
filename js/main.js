'use strict'

const userNumber = document.querySelector(".js-in-number");
const buttonTry = document.querySelector(".js-button-try");
const errorMessage = document.querySelector(".js-error-message");
const numberTip = document.querySelector(".js-in-tip");
const numberTries = document.querySelector(".js-in-tries");


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function setRandomNumber () {
    const randomNumber = getRandomNumber(100);
    console.log(setRandomNumber);
}



function handleButtonTry(event) {
    event.preventDefault();
    if (userNumber === "" || userNumber > 100 || userNumber < 0) {
        errorMessage.innerHTML = "El número debe estar entre 1 y 100"
    } else {

    }

}

buttonTry.addEventListener("click", handleButtonTry);