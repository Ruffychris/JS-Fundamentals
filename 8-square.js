// This script reads the first argument (size) and prints a SQUARE
// of 'X' characters, where the size determines the side length.

// 1. Get the first command-line argument.
const size_arg = process.argv[2];

// 2. Convert the argument to an integer.
const size = parseInt(size_arg);

// Check if the argument is invalid (missing, non-numeric, or negative/zero).
if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  // Outer loop controls the rows (height of the square).
  // The loop runs 'size' times.
  for (let i = 0; i < size; i++) {
    // Inner loop builds the row string.
    // It runs 'size' times, ensuring every row is the same length.
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "X";
    }
    // Print the completed row.
    console.log(row);
  }
}