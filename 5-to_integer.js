// This script converts the first command-line argument to an integer
// and prints it, or prints "Not a number" if conversion fails.

// 1. Get the first argument. It will be 'undefined' if no argument is provided.
const arg = process.argv[2];

// 2. Convert the argument to an integer.
// If 'arg' is undefined, parseInt(undefined) returns NaN.
// If 'arg' is a string like "School", parseInt("School") returns NaN.
// If 'arg' is a number string like "89.89", parseInt returns 89.
const number = parseInt(arg);

// 3. Check if the conversion resulted in a valid number using isNaN().
// We must also check that 'arg' is not undefined, otherwise 'NaN is NaN' is true,
// but the requirement "if the argument can be converted to an integer"
// implies we only proceed if an argument exists AND it is a valid number.
// However, based on the required output (empty input -> "Not a number"),
// checking isNaN(number) alone is sufficient, as parseInt(undefined) yields NaN.
if (isNaN(number)) {
  console.log("Not a number");
} else {
  // Print the number in the required format.
  console.log("My number: " + number);
}