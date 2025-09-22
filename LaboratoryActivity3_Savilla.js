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

function isPrime(number) {
  
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
console.log(`Base number: ${base_number}`);
console.log(`\n Problem 1: Grade Calculator`);
console.log(`Grade: ${calculateGrade(base_number)}`);
console.log(`\nProblem 2: Star Pattern`);
showStars(base_number);
console.log(`\nProblem 3: Prime number`);
const numberToCheck = base_number + 10;
console.log(`Checking: ${numberToCheck}, Prime: ${isPrime(numberToCheck)}`);
console.log(`\nProblem 4 `);
multiplicationTable(base_number);