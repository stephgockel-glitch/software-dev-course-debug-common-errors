// Program C
// ERROR TYPE: Logic error (prime test inverted).
// Original returned true when divisible (that's NOT prime).
// FIX: If divisible -> return false; if no divisors found -> return true.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // divisible -> NOT prime
    }
  }
  return true; // no divisors -> prime
}

// Verify the fix:
console.log(isPrime(7)); // true
console.log(isPrime(8)); // false
console.log(isPrime(2)); // true
console.log(isPrime(1)); // false
