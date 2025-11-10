// This script prints "C is fun" x times, where x is the first argument (process.argv[2]).
// Constraints: Use a loop, use only two console.log calls, no 'var'.

// 1. Get the first command-line argument.
const x_arg = process.argv[2];

// 2. Convert the argument to an integer.
const x = parseInt(x_arg);

// Check if the argument is invalid (missing or cannot be converted to an integer).
if (isNaN(x)) {
    // This is the first allowed console.log: prints the error message.
    console.log("Missing number of occurrences");
} else {
    // The loop handles repetition and the negative number case:
    // If x is 5, the loop runs 5 times (i=0 to 4).
    // If x is -3, the loop condition (i < x) fails immediately (0 < -3 is false),
    // and the loop body is skipped, printing nothing, as required.
    for (let i = 0; i < x; i++) {
        // This is the second allowed console.log: prints the repeated message.
        console.log("C is fun");
    }
}