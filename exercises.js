"use strict";
// Bismillah
// Exercise 1
function calcMeters(length) {
    const meters = Math.floor(length / 100);
    return meters;
}
const num = 250;
const completeMeters = calcMeters(length);
console.log(`Complete meters: ${completeMeters}`);
// Exercise 2
function calcTons(weight) {
    const tons = Math.floor(weight / 1000);
    return tons;
}
const weight = 2500;
const fullTons = calcTons(weight);
console.log(`Full tons: ${fullTons}`);
// Exercise 3
function calcFitCount(A, B) {
    if (A < B) {
        throw new Error("A must be greater than B");
    }
    const fitCount = Math.floor(A / B);
    return fitCount;
}
const A = 100;
const B = 20;
const fitCount = calcFitCount(A, B);
console.log(`Number of times section B can fit into section A: ${fitCount}`);
// Exercise 4
function calcNimadurni(number) {
    if (number < 10 || number > 99) {
        throw new Error("Invalid number. Please provide a two-digit number.");
    }
    const tens = Math.floor(number / 10);
    const ones = number % 10;
    return { tens, ones };
}
const number = 57;
const { tens, ones } = calcNimadurni(number);
console.log(`Tens: ${tens}`);
console.log(`Ones: ${ones}`);
// Exercise 5
function sumOfDigit() {
    let sum = 0;
    for (let i = 10; i <= 99; i++) {
        sum += i;
    }
    return sum;
}
const sum = sumOfDigit();
console.log(`Sum of two-digit numbers: ${sum}`);
// Exercise 6
function findDigitNumbers() {
    let product = 0;
    for (let i = 10; i <= 99; i++) {
        for (let j = 10; j <= 99; j++) {
            const currentProduct = i * j;
            if (currentProduct > product) {
                product = currentProduct;
            }
        }
    }
    return product;
}
const result = findDigitNumbers();
console.log(`The product of two-digit numbers is: ${result}`);
// Exercise 7
function findFaces(start, end) {
    const faces = [];
    for (let num = start; num <= end; num++) {
        const hundreds = Math.floor(num / 100);
        const tens = Math.floor((num % 100) / 10);
        const ones = num % 10;
        if (hundreds - tens === tens - ones) {
            faces.push(num);
        }
    }
    return faces;
}
const start = 100;
const end = 999;
const faceNumbers = findFaces(start, end);
console.log(`The faces within the range ${start} to ${end} are: ${faceNumbers.join(", ")}`);
