// This is a JavaScript implementation of the classic FizzBuzz problem. The function fizzBuzz(n) returns an array of strings where:

// Numbers divisible by both 3 and 5 are replaced with "FizzBuzz".
// Numbers divisible by only 3 are replaced with "Fizz".
// Numbers divisible by only 5 are replaced with "Buzz".
// All other numbers are returned as strings.
// This solution iterates from 1 to n and builds the result array accordingly.


var fizzBuzz = function (n) {
    let arr = []
    for (i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz")
        } else if (i % 3 == 0) {
            arr.push("Fizz")
        } else if (i % 5 == 0) {
            arr.push("Buzz")
        } else {
            arr.push(`${i}`)
        }
    }
    return arr
};
