/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(n + m), where n is the length of s1 and m is the length of s2.
 *   In the worst case, we may need to iterate through both strings once.
 * - Space: O(m), where m is the length of s2.
 *   We use a map to store the counts of characters in s2.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 * 
 */

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.


function canBuildS1FromS2(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const charCounts = new Map();

    // Count the characters in s2 and store them in the map
    for (const char of s2) {
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }

    // Check if s1 characters are present in s2 and their counts are sufficient
    for (const char of s1) {
        if (!charCounts.has(char) || charCounts.get(char) === 0) {
            return false;
        }
        charCounts.set(char, charCounts.get(char) - 1);
    }

    return true;
}

// Test cases
console.log(canBuildS1FromS2(strA1, strB1)); // Output: true
console.log(canBuildS1FromS2(strA2, strB2)); // Output: false
console.log(canBuildS1FromS2(strA3, strB3)); // Output: false
console.log(canBuildS1FromS2(strA4, strB4)); // Output: true
console.log(canBuildS1FromS2(strA5, strB5)); // Output: false


/*****************************************************************************/