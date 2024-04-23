function arrayStringsAreEqual(word1, word2) {
  let stringWord1 = "";
  let stringWord2 = "";
  const maxLength = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      stringWord1 += word1[i];
    }
    if (i < word2.length) {
      stringWord2 += word2[i];
    }
  }
  return stringWord1 === stringWord2;
}

// const arrayStringsAreEqual = (word1, word2) => {
//   return word1.join("") === word2.join("");
// };
