const base_number=9;

function calculateGrade(baseNumber) {
  const score = baseNumber * 10 + 5;

  let grade;
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else {
    grade = "F";
  }

  return grade;
}

function showStars(baseNumber) {
  const rows = baseNumber + 2;

  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime
  if (n === 2) return true; // 2 is prime
  if (n % 2 === 0) return false; // even numbers > 2 are not prime

  // Check divisors from 3 up to sqrt(n)
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function isPrime(number) {
    if (number <=1)return false;                 
    if (number ===2)return true;

  for (let factor = 2; factor < number; factor++) 
    if (number % factor === 0) 
      return false; 

  return true;
}
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

console.log(`Problem 1: `);
console.log(`Grade: ${calculateGrade(base_number)}`);
console.log(`Problem 2: \n`);
showStars(base_number);
console.log(`Problem 3: \n`);
const numberToCheck = base_number + 10;
console.log(`Checking: ${numberToCheck}, Prime: ${isPrime(numberToCheck)}`);
console.log(`Problem 4 \n`);

multiplicationTable(base_number);