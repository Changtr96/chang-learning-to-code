function mergeStringsAlternately(word1, word2) {
  let result = "";
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (i < word1.length && i < word2.length) {
      result += word1[i];
      result += word2[i];
    } else if (word1.length <= i && i < word2.length) {
      result += word2[i];
    } else {
      result += word1[i];
    }
  }
  return result;
}
