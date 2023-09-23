// Bismillah

// Exercise 1

function calcMeters(length: number): number {
  const meters = Math.floor(length / 100); 
  return meters;
}

const length = 250; 
const completeMeters = calcMeters(length);
console.log(`Complete meters: ${completeMeters}`);
