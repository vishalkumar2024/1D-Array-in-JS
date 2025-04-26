let previous2 = 0;
let previous1 = 1;
let fiboNum;

console.log(`The 1st Fibonacci number is ${previous2}`);
console.log(`The 2nd Fibonacci number is ${previous1}`);

for (let i = 0; i < 10 - 2; i++) {
  fiboNum = previous2 + previous1;
  console.log(`the ${i + 3}th fibonacci number is ${fiboNum}`);
  previous2 = previous1;
  previous1 = fiboNum;
}

