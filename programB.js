// Program B
// ERROR TYPE: Runtime / Data-Type Error
// Original code had ["eight"] as a string, which caused NaN when multiplied.
// FIX: Replace "eight" with the number 8, or handle non-numeric values safely.

let numbers = [2, 4, 8];  // ✅ corrected: use numbers only

for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// VERIFY OUTPUT:
// 4
// 8
// 16
