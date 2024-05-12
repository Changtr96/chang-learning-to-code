// /**
//  * Ex1
//  * @param {*} str "hello world 2024"
//  * @returns ["hello", "world", "2024"]
//  */

// function split(str) {
//   const result = [];
//   // Init a word = ""
//   let word = "";
//   // loop on each char
//   // With each char
//   // If str[i] !== " "
//   // Add str[i] to word
//   // Else
//   // push the word -> result
//   // reset word -> ""
//   for (i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       word += str[i];
//     } else if (word !== "") {
//       result.push(word);
//       word = "";
//     }
//   }
//   if (word !== "") {
//     result.push(word);
//   }
//   return result;
// }
// console.log(split("     happy new year"));
// console.log(split("     "));
// console.log(split("     happy new year          a"));

// /**
//  * Ex2
//  * @param {*} str "   hello          world 2024"
//  * @returns 3
//  */
// function countWord(str) {
//   let result = split(str).length;
//   return result;
// }

// console.log(countWord("happy new year"));
// console.log(countWord("     happy new year"));
// console.log(countWord("     "));
// console.log(countWord("     happy new year          a"));

// /**
//  * Ex3
//  * @param {*} str "abc"
//  * @returns "cba"
//  */
// function reverseStr(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }
// console.log(reverseStr("happy new year"));
// console.log(reverseStr(""));
// console.log(reverseStr("happy new year 42"));

// /**
//  * Ex4
//  * @param {*} str "hello     world 2024"
//  * @returns "olleh     dlrow 4202"
//  */
// function reverseCharInWord(str) {
//   let result = "";
//   let word = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       result += reverseStr(word) + " ";
//       word = "";
//     } else {
//       word += str[i];
//     }
//   }
//   result += reverseStr(word);
//   return result;
// }

// console.log(reverseCharInWord("    happy        new year 42         "));
// console.log(reverseCharInWord(""));

// function numberOfGoodPairs(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) result++;
//     }
//   }
//   return result;
// }
// console.log(numberOfGoodPairs([1, 2, 1, 2, 2, 2]));

// function maximumWealth(accounts) {
//   if (accounts.length === 0) {
//     return -1;
//   }
//   let maxWealth = accounts[0][0];
//   for (let i = 0; i < accounts.length; i++) {
//     if (accounts[i].length === 0) {
//       return -1;
//     }
//     let wealth = 0;
//     for (let j = 0; j < accounts[i].length; j++) {
//       wealth += accounts[i][j];
//     }

//     if (wealth > maxWealth) {
//       maxWealth = wealth;
//     }
//   }
//   return maxWealth;
// }

// console.log(maximumWealth([[1, 2, 3], [4, 5, 6], [-3, -15, 40], [0], [50]]));
// console.log(maximumWealth([[], []]));

// function countGoodTriplets(arr, a, b, c) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (
//           Math.abs(arr[i] - arr[j]) <= a &&
//           Math.abs(arr[j] - arr[k]) <= b &&
//           Math.abs(arr[i] - arr[k]) <= c
//         ) {
//           result++;
//         }
//       }
//     }
//   }
//   return result;
// }
// console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));

// function maxProduct(nums) {
//   let max = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let result = (nums[i] - 1) * (nums[j] - 1);
//       if (result > max) {
//         max = result;
//       }
//     }
//   }
//   return max;
// }
// console.log(maxProduct([3, 4, 5, 2]));

// function findLucky(arr) {
//   let result = -1;
//   let count = 1;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count === arr[i]) {
//       result = arr[i];
//       count = 1;
//     } else {
//       count = 1;
//     }
//     return result;
//   }
// }
// console.log(findLucky([1, 2, 2, 4, 4, 4, 3, 3]));
// function canPlaceFlowers(flowerbed, n) {
//   // Lặp qua luống hoa
//   for (let i = 0; i < flowerbed.length; i++) {
//     // Kiểm tra xem ô đất hiện tại và các ô lân cận có trống hay không
//     if (
//       flowerbed[i] === 0 &&
//       (flowerbed[i - 1] === 0 || i === 0) &&
//       (flowerbed[i + 1] === 0 || i === flowerbed.length - 1)
//     ) {
//       // Trồng hoa và giảm số lượng hoa còn lại
//       flowerbed[i] = 1;
//       n--;
//     }
//   }

//   // Trả về true nếu có thể trồng hết hoa
//   return n <= 0;
// }

// const sumOfArr = (arr) => {
//   let sum = 0;
//   arr.forEach((item, index) => {
//     if (index % 2 === 0) {
//       sum += item;
//     }
//   });
//   return sum;
// };

// const test = [70, 2, 3, 5, 6];
// console.log(sumOfArr(test));

// const arrayStringsAreEqual = (word1, word2) => {
//   let stringWord1 = "";
//   let stringWord2 = "";
//   maxLength = Math.max(word1.length, word2.length);
//   for (let i = 0; i < maxLength; i++) {
//     if (i < word1.length) {
//       stringWord1 += word1[i];
//     }
//     if (i < word2.length) {
//       stringWord2 += word2[i];
//     }
//   }
//   return stringWord1 === stringWord2;
// };

// const test1 = ["test", "thoi"];
// const test2 = ["t", "est", "thoi"];

// console.log(arrayStringsAreEqual(test1, test2));

// const arrayStringsAreEqual = (word1, word2) => {
//   return word1.join("") === word2.join("");
// };

// const test1 = ["test", "thoi"];
// const test2 = ["t", "est", "thoi"];

// console.log(arrayStringsAreEqual(test1, test2));

// function reverseWords(s) {
//   const words = s.split(" ");
//   let result = "";
//   for (let i = words.length - 1; i >= 0; i--) {
//     if (words[i] !== "") {
//       result += words[i];
//       result += " ";
//     }
//   }

//   return result.trim();
// }
// console.log(reverseWords(" haha hehe     hihi "));

// function reverseVowels(s) {
//   const arr = s.split("");
//   const vowels = [];
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] === "a" ||
//       arr[i] === "e" ||
//       arr[i] === "i" ||
//       arr[i] === "o" ||
//       arr[i] === "u" ||
//       arr[i] === "A" ||
//       arr[i] === "E" ||
//       arr[i] === "I" ||
//       arr[i] === "O" ||
//       arr[i] === "U"
//     ) {
//       vowels.push(arr[i]);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] !== "a" &&
//       arr[i] !== "e" &&
//       arr[i] !== "i" &&
//       arr[i] !== "o" &&
//       arr[i] !== "u" &&
//       arr[i] !== "A" &&
//       arr[i] !== "E" &&
//       arr[i] !== "I" &&
//       arr[i] !== "O" &&
//       arr[i] !== "U"
//     ) {
//       result += arr[i];
//     } else {
//       result += vowels.pop();
//     }
//   }
//   return result;
// }
// console.log(reverseVowels("hello"));

// function reverseVowels(s) {
//   const arr = s.split("");
//   const vowels = "euoaiEUOAI";
//   const vowelsInString = [];
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (vowels.indexOf(arr[i]) !== -1) {
//       vowelsInString.push(arr[i]);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (vowels.indexOf(arr[i]) == -1) {
//       result += arr[i];
//     } else {
//       result += vowelsInString.pop();
//     }
//   }
//   return result;
// }
// console.log(reverseVowels("hello"));

// const kidsWithCandies = (candies, extraCandies) => {
//   const result = [];
//   for (let i = 0; i < candies.length; i++) {
//     if (candies[i] + extraCandies >= Math.max(...candies)) {
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }
//   return result;
// };
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
