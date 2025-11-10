// This script computes and prints the factorial of the first argument recursively.
// Constraints: Must use a recursive function, console.log, and no 'var'.
// Special Rule: Factorial of NaN (and negative numbers) is 1.

/**
 * Recursively computes the factorial of an integer n.
 * Handles NaN, negative numbers, and 0 by returning 1.
 * @param {number} n The integer to compute the factorial for.
 * @returns {number} The computed factorial.
 */
function factorial(n) {
  // Base Case 1: Handles NaN, 0, and negative numbers (n <= 0)
  // parseInt(undefined) yields NaN, which means the condition (isNaN(n) || n <= 0) returns true,
  // satisfying the rule that Factorial of NaN is 1, and standard math (0! = 1).
  if (isNaN(n) || n <= 0) {
    return 1;
  }

  // Recursive Step: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// 1. Get the first command-line argument.
const arg = process.argv[2];

// 2. Convert the argument to an integer.
// This is done outside the function call to ensure the conversion is handled
// exactly once for the initial argument.
const number = parseInt(arg);

// 3. Call the factorial function and print the result.
console.log(factorial(number));