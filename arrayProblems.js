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