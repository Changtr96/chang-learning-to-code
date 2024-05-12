const arr1 = [1, 2, 3, 4]; //
const arr2 = [1, 2, 3, 4]; //
const arr3 = arr1; //
arr3.push(5);

// console.log(arr1 === arr2);
// console.log(arr1 === arr3);
// console.log(arr1);

const str1 = "abc"; //
const str2 = "abc";
const str3 = str1;
// console.log(str1 == str2);
// console.log(str3 == str2);

const x = "abc";
const y = "xyz";
const concat = x + " " + y;
const concat2 = `${x}/${x}/${y}`;
console.log(concat, concat2);

const CODE_A = 65;
const PI = 3.14;
const CODE_a = "a".charCodeAt(0);

/**
 *
 * @param {*} str "happynewyear"
 * return "HAPPYNEWYEAR"
 */
function upperCase(str) {
  let result = "";

  // Loop in string
  for (let i = 0; i < str.length; i++) {
    // Check is lower case char
    if (CODE_A <= str.charCodeAt(i) && str.charCodeAt(0) <= "z".charCodeAt(0)) {
      // Upper case each character
      const codea = "a".charCodeAt(0);
      const codeA = "A".charCodeAt(0);
      const charAtI = str[i];
      const uppercaseCode = codeA + charAtI.charCodeAt(0) - codea;
      const uppercaseChar = String.fromCharCode(uppercaseCode);
      result += uppercaseChar;
    } else {
      result += str[i];
    }
  }

  return result;
}

// "a", "b"
function isLowerCase(character) {
  return true;
}

// "a", "b"
function isUpperCase(character) {
  return true;
}

function lowerCase(str) {
  return "";
}

console.log(upperCase("happy%new%year"));

/**
 * Ex1
 * @param {*} str "hello world 2024"
 * @returns ["hello", "world", "2024"]
 */

function split(str) {
  // Init result array = []
  // Init a word = ""
  let word = "";

  // loop on each char
  // With each char

  // If str[i] !== " "
  // Add str[i] to word
  // Else
  // push the word -> result
  // reset word -> ""
  word = "";

  return [""];
}

/**
 * Ex2
 * @param {*} str "   hello          world 2024"
 * @returns 3
 */
function countWord(str) {}

/**
 * Ex3
 * @param {*} str "abc"
 * @returns "cba"
 */
function reverseStr(str) {
  return "";
}

/**
 * Ex4
 * @param {*} str "hello     world 2024"
 * @returns "olleh     dlrow 4202"
 */
function reverseCharInWord(str) {
  return "";
}

/**
 *
 * @param {*} strArr ["h", "e", "l", "l", "o"]
 * @return "h_e_l_l_o"
 */
function join(strArr, separate) {
  return "";
}

console.log(join(["happy", "new", "year"], "_"));

const listUsers = [
  {
    id: "123",
    phone: "092312",
    email: "thinhkhang97@gmail.com",
  },
  {
    id: "124",
    phone: "092312",
    email: "thinhkhang97@gmail.com",
  },
  {
    id: "124",
    phone: "092312",
    email: "thinhkhang97@gmail.com",
  },
];

function findUserById(users, id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return users[i];
    }
  }
  return null;
}

console.log(findUserById(listUsers, "1"));
console.log(findUserById(listUsers, "124"));

import { calculateNextDate } from "./date-time";
