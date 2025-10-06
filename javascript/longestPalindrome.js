// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s; // A single character or empty string is already a palindrome

    let start = 0;   // starting index of longest palindrome
    let maxLen = 1;  // length of longest palindrome

    // Helper function to expand from the center
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the length of palindrome found
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome (centered at one character)
        const len1 = expandAroundCenter(i, i);
        // Even length palindrome (centered between two characters)
        const len2 = expandAroundCenter(i, i + 1);
        
        const len = Math.max(len1, len2);

        if (len > maxLen) {
            maxLen = len;
            // Calculate new start index
            start = i - Math.floor((len - 1) / 2);
        }
    }

    // Return substring from start to start + maxLen
    return s.substring(start, start + maxLen);
};


s = 'babbbr'