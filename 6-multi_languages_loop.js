// Script to print three specific lines using an array, a loop, and only one console.log

// Define the array of lines using 'const' to satisfy the constraint against 'var'
const lines = ["C is fun", "Python is cool", "JavaScript is amazing"];

// Initialize an empty string to hold the final output.
// We use 'let' here as the string will be reassigned (concatenated) inside the loop.
let output = "";

// Use a 'for...of' loop to iterate through the array (satisfying the loop constraint)
for (const line of lines) {
  // Append the line and a newline character to the output string.
  // This builds the multi-line string before the single console.log call.
  output += line + "\n";
}

// Use only one console.log to print the entire multi-line string.
// The .trim() function is used to remove the trailing newline character
// that was added after the last line, ensuring the output is clean.
console.log(output.trim());