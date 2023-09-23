// Bismillah

// Exercise 1

function calcMeters(length: number): number {
  const meters = Math.floor(length / 100); 
  return meters;
}

const length = 250; 
const completeMeters = calcMeters(length);
console.log(`Complete meters: ${completeMeters}`);


// Exercise 2

function calcTons(weight: number): number {
  const tons = Math.floor(weight / 1000); 
  return tons;
}

const weight = 2500; 
const fullTons = calcTons(weight);
console.log(`Full tons: ${fullTons}`);


// Exercise 3

function calcFitCount(A: number, B: number): number {
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

function calcNimadurni(number: number): { tens: number; ones: number } {
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

