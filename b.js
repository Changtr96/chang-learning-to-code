// function selectOdd(arr) {
//  //Tạo mảng mới chỉ lấy các số lẻ
//   const arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }

// function selectEven(arr) {
//  //Tạo mảng mới chỉ lấy các số chẵn
//   const arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }

// function checkMaximum(arr) {
//  //Kiểm tra giá trị lớn nhất trong mảng
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// function findMaximumOdd(arr) {
//  //Kiểm tra số lẻ lớn nhất trong mảng
//   const arr2 = selectOdd(arr);
//   const max = checkMaximum(arr2);
//   return max;
// }

// function findMaximumEven(arr) {
//  //Kiểm tra số lẻ lớn nhất trong mảng
//   const arr2 = selectEven(arr);
//   const max = checkMaximum(arr2);
//   return max;
// }

// console.log(findMaximumOdd([1, 3, 4, 7, 10, 15, 20, 21, -5, 30, 31, 25, 26]));
// console.log(findMaximumEven([1, 3, 4, 7, 10, 15, 20, 21, 42, 30, 31, 25, 46]));

// function revert(arr) {
//   const arr2 = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr2.push(arr[i]);
//   }
//   return arr2;
// }

// function checkTheSame(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function checkP(arr) {
//   const arr2 = revert(arr);
//   const result = checkTheSame(arr, arr2);
//   return result;
// }

// console.log(checkP([1, 2, 3, 4, 3, 2, 1]));
// console.log(checkP([1, 2, 3, 4, 6, 2, 1]));
// console.log(checkP([1, 1, 3, 4, 3, 1, 1]));
// console.log(checkP([1, 2, 2, 4, 3, 2, 1]));
