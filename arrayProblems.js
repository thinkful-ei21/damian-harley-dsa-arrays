'use strict';

function spaceFiller(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++){
    if (str[i] === ' ') {
      newStr += '%20';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(spaceFiller('tauhida parveen'));


function lessThanFive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }  
  return newArr;
}
console.log(lessThanFive([3, 4, 5, 10, 15]));

//function maxContinuousSum

function mergeArrays(arr1, arr2) {
  let index2 = 0;
  let newArr = [];
  for (let i = 0; i < arr1.length; i++){
    if (index2 < arr2.length) {
      while(arr2[index2] < arr1[i]){
        newArr.push(arr2[index2]);
        index2++;
        if(index2 >= arr2.length){
          break;
        }
      }
    }
    newArr.push(arr1[i]);
  }
  return newArr;
}

console.log(mergeArrays([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));

