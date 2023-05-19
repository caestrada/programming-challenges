// Time:  O(n)
// Space: O(1)
export const isPrime = (n: number) => {
  if (n === 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// Time:  O(sqrt(n))
// Space: O(1)
export const isPrimeOptimized = (n: number) => {
  if (n === 1) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
