// Program C
// ERROR TYPE: Logic error (prime test was inverted)
// FIX: If num is divisible by any i in [2, num-1], return false (not prime).
//      If no divisors are found, return true.

function isPrime(num) {
  if (num < 2) return false;           // 0, 1, negatives are not prime
  for (let i = 2; i < num; i++) {       // check all possible divisors
    if (num % i === 0) {                // divisible by i → not prime
      return false;
    }
  }
  return true;                          // no divisors found → prime
}

// VERIFY (expected results in comments)
console.log(isPrime(7));  // true
console.log(isPrime(8));  // false
console.log(isPrime(2));  // true
console.log(isPrime(1));  // false
