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

function noVowels(str) {
  let newStr = '';
  var vowels = ['a','e','i','o','u'];
  for (let i = 0; i < str.length; i++){
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(noVowels('novowels'));

function stringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[0]) {
      let rotation = str2.substring(i) + str2.substring(0,i);
      if (rotation === str1) {
        return true;
      }
    }
  }
  return false;
}

console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));

function products(arr) { 
  if (!arr.length) {
      return [];
    }
//  for (let i = 0; i < arr.length; i++){

      
  return [arr[0] * [n+1], ...products(arr.slice(1))]
}