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
