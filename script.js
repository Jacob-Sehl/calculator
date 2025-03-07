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
const calcScreen = document.querySelector(".screenContent");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const resultButton = document.querySelector('.result');

/**
 * @description Parses the equation into numbers and operands and calculates the result
 */
function operate(){
    //Variable Declaration
    const equation = calcScreen.textContent;
    const parts = equation.split(/([÷x+\-])/g).filter(part => part !== '');

    const numbers = [];     // Array of all numbers in the equation
    const operands = [];    // Array of all opperands in the equation

    // Separats the operands and the numbers into their own arrays
    parts.forEach(part => {
        if(part.match(/([÷x+\-])/)) {
            operands.push(part);
        } else {
            numbers.push(parseFloat(part));
        }
    });

    //calculates the result of the equation following bedmas
    let result = calculate(numbers, operands);

    //Display the result
    calcScreen.textContent = result;
}

function calculate(numbers, operands) {
    // First handle multiplication and division
    let i = 0;
    while (i < operands.length) {                           // For each operand in the array
        if (operands[i] === '÷' || operands[i] === 'x') {   // Checks if the operand is multiplication or division
            let multDivResult = operands[i] === '÷'         // Checks if operation is division
                ? divide(numbers[i], numbers[i + 1])        // divides the numbers before and after the dividing operand
                : multiply(numbers[i], numbers[i + 1]);     // otherwise multiplies the numbers before and after the operand
            
            numbers.splice(i, 2, multDivResult);    // replaces old numbers with the results of the multiplication and division
            operands.splice(i, 1);                  // Removes the used operands
        } else {
            i++;        // ignore - and + and move on to next operand
        }
    }
    
    // Then handle addition and subtraction
    i = 0;
    while (i < operands.length) {                   // For each operand in the array
        let addSubResult = operands[i] === '+'      // Check if the operand is +
            ? add(numbers[i], numbers[i + 1])       // Adds the numbers before and after the operand
            : subtract(numbers[i], numbers[i + 1]); // Otherwise subtracts the numbers before and after the operand
        
        numbers.splice(i, 2, addSubResult);     // replace old numbers with the result of the addition/subtraction
        operands.splice(i, 1);                  // removes the used opperands
    }
    
    return numbers[0];  // the number in index 1 is the only one left and our result woohoo
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

/**
 * @description Adds listeners to the buttons that add a glow style when mouseover
 */
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
    resultButton.addEventListener('mouseover', () => {
        resultButton.classList.add("glow");
    });
    resultButton.addEventListener('mouseout', () => {
        resultButton.classList.remove("glow");
    })
}

/**
 * @description Adds responsive animations to buttons and on click sets executes their respective functions
 */
function addBtnListeners(){
    // Adds Click Event listeners to all number buttons
    numberButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.classList.add('clicked');
            setTimeout(() => {
                e.target.classList.remove('clicked');
            }, 100);
            display(e);
        });
    });

    // Adds Click Event listeners to all operator buttons
    operatorButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.classList.add('clicked');
            setTimeout(() => {
                e.target.classList.remove('clicked');
            }, 100);
            display(e);
        });
    });

    // Adds Click Event listener to the clear button
    clearButton.addEventListener('click', (e) => {
        e.target.classList.add('clicked');
        setTimeout(() => {
            e.target.classList.remove('clicked');
        }, 100);
        clear();
    });

    // Adds click listener for the delete button
    deleteButton.addEventListener('click', (e) => {
        e.target.classList.add('clicked');
        setTimeout(() => {
            e.target.classList.remove('clicked');
        }, 100);
        deleteFromScreen();
    });

    // Adds click listener for the result button
    resultButton.addEventListener('click', (e) => {
        e.target.classList.add('clicked');
        setTimeout(() => {                          // Animation needs to be short to ilustrate that button has been clicked
            e.target.classList.remove('clicked');
        }, 100);
        operate();  //computes the result of the equation in the screen
    });
}

/**
 * @description sets the screen to display the result of a button press
 * @param {event} event 
 */
function display(event) {
    const btn = event.target;
    calcScreen.textContent += btn.textContent;
}

/**
 * @description Clears the calculator screen
 */
function clear() {
    calcScreen.textContent = '';
}

/**
 * @description deletes the last inputted character in the calculator screen
 */
function deleteFromScreen(){
    calcScreen.textContent = calcScreen.textContent.slice(0,-1); // Removes the last character inputted in the screen
}

// BEGINNING OF PROGRAM
addBtnListeners();
glow(); // Adds glow to buttons on mouseover
