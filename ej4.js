const generated = document.getElementById('generated')
const minimum = document.getElementById('min')
const maximum = document.getElementById('max')
const med = document.getElementById('med')
const sum = document.getElementById('sum')
const last = document.getElementById('last')

const buttonEl = document.getElementById('button')

let generatedNumbers = []

buttonEl.addEventListener('click', handleClick);



function generateRandomInteger(min, max) {
    min = -10;
    max = 10;
    let num1 = Math.floor(Math.random() * (max - min) + min);
    generatedNumbers.push(num1)

    let num2 = Math.floor(Math.random() * (max - min) + min);
    generatedNumbers.push(num2)

    let num3 = Math.floor(Math.random() * (max - min) + min);
    generatedNumbers.push(num3)

    let num4 = Math.floor(Math.random() * (max - min) + min);
    generatedNumbers.push(num4)

    let num5 = Math.floor(Math.random() * (max - min) + min);
    generatedNumbers.push(num5)

    let num6 = Math.floor(Math.random() * (max - min) + min);
    generatedNumbers.push(num6)

    let num7 = Math.floor(Math.random() * (max - min) + min);
    generatedNumbers.push(num7)

    let num8 = Math.floor(Math.random() * (max - min) + min);
    generatedNumbers.push(num8)

    let num9 = Math.floor(Math.random() * (max - min) + min);
    generatedNumbers.push(num9)


    generated.innerHTML = `
    ${num1}, 
    ${num2}, 
    ${num3}, 
    ${num4}, 
    ${num5}, 
    ${num6}, 
    ${num7}, 
    ${num8}, 
    ${num9}`
}

function checkForMin() {
    minimum.innerHTML = Math.min(...generatedNumbers)
}

function checkForMax() {
    maximum.innerHTML = Math.max(...generatedNumbers)
}

function checkForMed() {
    med.innerHTML = generatedNumbers[Math.round((generatedNumbers.length - 1) / 2)]
}

function checkForSum() {
    sum.innerHTML = generatedNumbers.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
}

function checkForLast() {
    last.innerHTML = generatedNumbers.reduce((accumulator, value) => {
        return accumulator * value;
    }, 0);
}

function handleClick() {
    generateRandomInteger()
    checkForMin()
    checkForMax()
    checkForMed()
    checkForSum()
    checkForLast()
}


