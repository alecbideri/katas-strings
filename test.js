function isRepeat(string) {
    const length = string.length;

    for (let i = 1; i <= length / 2; i++) { // Step 1: Iterate through potential pattern lengths
        if (length % i === 0) { // Step 2: Check if the string length is divisible by the current length `i`
            const pattern = string.slice(0, i); // Extract the substring of length `i`
            if (pattern.repeat(length / i) === string) { // Repeat and compare
                return true; // If the repeated pattern matches the original string, return true
            }
        }
    }
    return false; // If no repeating pattern is found, return false
}

console.log(isRepeat("abab")); // true
console.log(isRepeat("abcabc")); // true
console.log(isRepeat("abcd")); // false
