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
