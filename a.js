// // const a = [];
// // for (let i = 1; i <= 50; i++) {
// //   if (i % 3 === 1) {
// //     a.push(i);
// //   }
// // }
// // // if (arr[0]% 4===0){
// // //     console.log(arr[0]*arr[0])
// // // }
// // // if (arr[1]% 4===0){
// // //     console.log(arr[1]*arr[1])
// // // }

// // //
// // // i = 0 -> i%2===0 -> a[0] * a[0]
// // // i = 1 -> i%2===0 -> no
// // // i = 2 -> i%2===0 -> a[2] * a[2]

// // for (let i = 0; i < a.length; i++) {
// //   if (i % 2 === 0) {
// //     console.log(a[i] * a[i]);
//  }
//}
// function checkLeapYear(year){
//     return year % 4 ===0 && year % 100 !==0 || year % 400 === 0
// }

//k=numberOfNextDates
//k=10: day + 1 -> check, day + 2 -> check, day + 3 -> check .... day + 10 -> check

// function getNextDate(day,month,year,numberOfNextDates){
//     const isLeapYear = checkLeapYear(year)

//     if (day === 31 && month === 12){
//       return `1/1/${year += 1}`
//     }

//     if(day === 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10)) {
//       return `1/${month += 1}/${year}`
//     }

//     if(day === 30 && (month === 4 || month === 6 || month === 9 || month === 11)) {
//       return `1/${month += 1}/${year}`
//     }

//     if(month === 2) {
//       if (isLeapYear && day === 29) {
//         return `1/3/${year}`
//       }
//       if(!isLeapYear && day === 28) {
//         return `1/3/${year}`
//       }
//     }

//     return `${day += 1}/${month}/${year}`
//   }

// function sumOdd(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(sumOdd([-5, 1, 3, 5, 7, 8, 2, 9]));

// function checkHasNegative(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(checkHasNegative([1, 2, 4, 6, 9, 8]));

// function convertToPositive(arr) {
//   let positive = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       positive.push(0 - arr[i]);
//     } else {
//       positive.push(arr[i]);
//     }
//   }
//   return positive;
// }
// console.log(convertToPositive([-4, -2, -5, -6, 1, 5, 7]));

// function powerUp(arr) {
//   let positive = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positive.push(arr[i] * arr[i]);
//     } else {
//       positive.push(arr[i]);
//     }
//   }
//   return positive;
// }
// console.log(powerUp([-4, -2, -5, -6, 1, 5, 7]));

// function checkTheSame(arr1, arr2) {
//   //check the same length
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   //check the same arr1[i] arr2[i]
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkTheSame([], []));

// function revert(arr) {
//   let answer = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     answer.push(arr[i]);
//   }
//   return answer;
// }
// console.log(revert([1, 1, 1, 4]));

// function checkP(arr) {
//   // tao mang moi la dao nguoc cua mang cu
//   const arr2 = revert(arr);
//   // kiem tra 2 mang co the same khong
//   const result = checkTheSame(arr, arr2);
//   return result;
// }

// console.log(checkP([1, 2, 3, 3, 2, 1]));

// function checkMinimum(arr) {
//   let min = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// console.log(checkMinimum([1, 2, 4, 6, -2, -4]));
// console.log(checkMinimum([1, 2, 4, -6, -2, -4]));
// console.log(checkMinimum([1, 1]));

// function checkMaximum(arr) {
//   let max = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(checkMaximum([1, 2, 4, 6, -2, -4]));
// console.log(checkMaximum([1, 2, 4, -6, -2, -4]));
// console.log(checkMaximum([1, 1]));

// function concat(arr1, arr2) {
//   const arr3 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     arr3.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     arr3.push(arr2[i]);
//   }
//   return arr3;
// }
// console.log(concat([1, 2, 3, 4], [5, 6, 7, 8]));

// function sum(arr1, arr2) {
//   let sumArr1 = 0;
//   for (i = 0; i < arr1.length; i++) {
//     sumArr1 += arr1[i];
//   }
//   let sumArr2 = 0;
//   for (i = 0; i < arr2.length; i++) {
//     sumArr2 += arr2[i];
//   }
//   return sumArr1 + sumArr2;
// }

// console.log(sum([20, 2, 3, 4], [5, 6, 7, 8]));
// console.log(sum([], []));
// console.log(sum([-20, 2, 3, 4], [5, 6, 7, 8, 10]));

// function slice(arr) {
//   console.log(arr.slice(0, 4));
// }

// slice([20, 2, 3, 4, 5, 6, 7, 8]);
// slice([1, 2, 3]);
// slice([]);

// function indexOfNumber(arr, number) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === number) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(indexOfNumber([1, 2, 3, 4, 5, 6], 5));
// console.log(indexOfNumber([1, 2, 3, 4, 5, 6], 2));
// console.log(indexOfNumber([1, 2, 3, 4, 5, 6], 7));

// function lastIndexOfNUmber(arr, number) {
//   let lastIndex = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === number) {
//       lastIndex = i;
//     }
//   }
//   return lastIndex;
// }
// console.log(lastIndexOfNUmber([1, 2, 5, 3, 4, 5, 6, 5, 8], 5));
// console.log(lastIndexOfNUmber([1, 2, 3, 4, 2, 5, 6], 2));
// console.log(lastIndexOfNUmber([1, 2, 3, 4, 5, 6], 7));
// console.log(lastIndexOfNUmber([1, 2, 3, 4, 5, 6, `10`, 5], `10`));
// console.log(lastIndexOfNUmber([], 7));
