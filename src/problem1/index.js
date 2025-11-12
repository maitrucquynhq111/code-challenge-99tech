// Problem 1: Three ways to sum to n

const sum_to_n_a = function (n) {
  // Validate input
  if (n <= 0) return 0;

  let result = 0;
  // Method 1: Use loop
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};

const sum_to_n_b = function (n) {
  // Validate input
  if (n <= 0) return 0;

  // Use summation of first n natural numbers formula
  return n * (n + 1) * 0.5;
};

  const sum_to_n_c = function (n) {
    // Validate input
    if (n <= 0) return 0;

    // Use recursion
    return n + sum_to_n_c(n - 1);
  };

module.exports = {
  sum_to_n_a,
  sum_to_n_b,
  sum_to_n_c
};