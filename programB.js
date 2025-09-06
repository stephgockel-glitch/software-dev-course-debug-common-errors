// Program B
// ERROR TYPE: Runtime/data-type issue: array contained "eight" (a string),
// which makes numbers[i] * 2 become NaN.
// FIX 1 (simple): use all numbers.

let numbers = [2, 4, 8]; // "eight" -> 8

for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// Optional FIX 2 (robust): skip non-numbers
// let numbers = [2, 4, "eight"];
// for (let i = 0; i < numbers.length; i++) {
//   if (typeof numbers[i] === "number") console.log(numbers[i] * 2);
//   else console.log(`Skipped non-number: ${numbers[i]}`);
// }
