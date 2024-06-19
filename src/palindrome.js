function isPalindrome(str) {
    var cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    var reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
// Contoh penggunaan
var testStrings = [
    "madam",
    "racecar",
    "hello",
    "A man, a plan, a canal, Panama",
];
testStrings.forEach(function (str) {
    console.log("".concat(str, ": ").concat(isPalindrome(str)));
});
