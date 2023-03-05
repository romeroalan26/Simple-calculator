"use strict";
const inputDisplay = document.querySelector(".display");

// function that add input

function addInput(value) {
	inputDisplay.value += value;
}

// Reset calculator
const reset = () => {
	inputDisplay.value = "";
};

//Show result by clicking on "=" button
function result() {
	inputDisplay.value = eval(inputDisplay.value);
}

// Show result by pressing Enter key
document.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		result();
	}
});

// Quater-root operation -
const root = () => {
	inputDisplay.value = Math.sqrt(inputDisplay.value);
};

// Dele fuction
const backSpace = () => {
	inputDisplay.value = inputDisplay.value.slice(0, -1);
};

// Power operation
const power = () => {
	inputDisplay.value = Math.pow(inputDisplay.value, 2);
};
