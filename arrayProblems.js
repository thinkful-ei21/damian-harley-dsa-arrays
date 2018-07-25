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

//spacefiller iterates once through str n times, where n is the length of the string, so it scales at O(n)

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

//lessThanFive scales at O(n), where n is the number of elements in arr

//function maxContinuousSum
//This algorithm would permutate through all possible continuos arrays, making it scale O(n!), where n is array length

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

//mergeArrays iterates through each array once, or m + n times, where m is the length of arr1 and n is the length of arr2
//So it scales linearly, O(n)

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

//noVowels scales at O(n), where n is the length of str

function products(arr) { 
  //find the product of the entire arr
  let total_product = 1;
  for (let i = 0; i < arr.length; i++) {
    total_product = total_product * arr[i];
  }
  //loop through the array and find total_product/value for each element
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(total_product/arr[i]);
  }
  //return new array
  return newArr;
}

console.log(products([1, 3, 9, 4]));

//products passes through arr twice, so it scales at O(n), where n is the number of elements in arr

//function 2DArray 
//

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

//stringRotation passes through str2 once and builds a new string if the element
//matches the first element of str1.  It scales at O(n), where n is the length of str2