function isPalindrome(str) {
    const cleanStr = str.replace(/\s/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("Coding Krishna")); // false