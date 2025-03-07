/**
 * CALCULATOR APP
 *  Creates a function GUI calculator in the browser with basic operations based on user input
 * 
 * MAIN FUNCTIONS:
 *  ADD
 *  SUBTRACT
 *  MULTIPLY
 *  DIVIDE
 *  OPERATE
 * 
 * UI INTERACTION / CSS MODIFICATION
 *  MOUSOVER GLOW
 *      #1 event handling
 *      #2 modify css
 *  CLICK RESPONSE
 *      #1 event handling
 *      #2 modify css
 *  DISPLAY NUMBERS
 *      #1 Button display
 *      #2 Operation result
 *  CLEAR NUMBERS
 */

// DOM VARIABLES
const calcScreen = document.querySelector(".screen");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");

function operate(){

}

/**
 * @description Adds two numbers
 * @param {number} num1 
 * @param {number} num2
 * @returns the sum of num1 and num2
 */
function add(num1, num2){
    return num1 + num2;
}

/**
 * @description Subtracts a number by another
 * @param {number} num1
 * @param {number} num2 
 * @returns num1 subtracted by num2
 */
function subtract(num1, num2){
    return num1 - num2;
}

/**
 * @description Multiplies a number by another
 * @param {number} num1 
 * @param {number} num2 
 * @returns num1 multiplied by num2
 */
function multiply(num1, num2){
    return num1 * num2;
}

/**
 * @description Divided a number by another
 * @param {number} num1
 * @param {number} num2 
 * @returns {number} num1 divided by num2
 */
function divide(num1, num2){
    return num1 / num2;
}

function glow(){
    numberButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add("glow");
        });
        button.addEventListener('mouseout', () => {
            button.classList.remove('glow');
        });
    });
    operatorButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add("glow");
        });
        button.addEventListener('mouseout', () => {
            button.classList.remove('glow');
        });
    });
    clearButton.addEventListener('mouseover', () => {
        clearButton.classList.add('glow');
    });
    clearButton.addEventListener('mouseout', () => {
        clearButton.classList.remove('glow');
    });

    deleteButton.addEventListener('mouseover', () => {
        deleteButton.classList.add("glow");
    });
    deleteButton.addEventListener('mouseout', () => {
        deleteButton.classList.remove('glow');
    });
}

function display(){

}

function clear(){

}

glow();