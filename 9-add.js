// This script prints the addition of two integers passed as command-line arguments.
// Constraints: Must define function add(a, b), use console.log, and no 'var'.

// Define the function prototype as required.
function add(a, b) {
  // 1. Convert arguments (which are strings/undefined) to integers.
  // If 'a' or 'b' is undefined or not a number, parseInt returns NaN.
  const num_a = parseInt(a);
  const num_b = parseInt(b);

  // 2. Addition. If either num_a or num_b is NaN, the result of the addition is NaN.
  return num_a + num_b;
}

// 1. Get the first two command-line arguments (process.argv[2] and process.argv[3]).
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// 2. Call the function with the arguments and print the result.
// This single console.log handles all cases (valid sum or NaN).
console.log(add(arg1, arg2));