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
