'use strict';

const Array = require('./array');

function main(){

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  //   arr.push(3);
  //   arr.push(5);
  //   arr.push(15);
  //   arr.push(19);
  //   arr.push(45);
  //   arr.push(10);
  //   arr.pop();
  //   arr.pop();
  //   arr.pop();
  arr.push('tauhida');
  console.log(arr);
  console.log(arr.get(0));
  let s = 'happy';
  console.log(s[0]);

}

main();