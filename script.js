
'use strict'

const colorInput = document.getElementById("text");
const changeColorButton = document.getElementById("btn");
const colorSquare = document.getElementById("square");
const circleBtn = document.getElementById("e_btn");
const inputRange = document.getElementById("range");

changeColorButton.addEventListener("click", function () {
    const color = colorInput.value;
    colorSquare.style.backgroundColor = color;
});

circleBtn.style.display = 'none';

inputRange.addEventListener("input", function () {
    const value = inputRange.value;

    circle.style.width = value + "%";
    circle.style.height = value + "%";

    console.log(circle.style.width, circle.style.height)
});