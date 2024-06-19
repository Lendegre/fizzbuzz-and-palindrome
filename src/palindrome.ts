function isPalindrome(str: string): boolean {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Contoh penggunaan
const testStrings = [
  "madam",
  "racecar",
  "hello",
  "A man, a plan, a canal, Panama",
];
testStrings.forEach((str) => {
  console.log(`${str}: ${isPalindrome(str)}`);
});
