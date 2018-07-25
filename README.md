# damian-harley-dsa-arrays

What is the length, capacity and memory address of your array?

Array { length: 1, _capacity: 3, ptr: 0 }

What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code

Array { length: 6, _capacity: 12, ptr: 3 }

The array has length 6 because we pushed 6 values to it.  It's capacity was expanded to 3 after 1 push.  when we pushed the 4th value, the array's capacity was increased by triple its present length, which would be 3*3.  9 added to capacity 3 results in capacity 12.  The memory address of the array is 3 because that's the last index where capacity was increased.  

What is the length, capacity and address of your array? Explain the result of your program after adding the new lines of code

Array { length: 3, _capacity: 12, ptr: 3 }

Calling pop 3 times reduced the length by 3.  The capacity and address weren't changed because we didn't need to increase the memory.

Print the first item in the array arr.

3

Empty the array and add just one item arr.push("tauhida");

Array { length: 1, _capacity: 3, ptr: 0 }

Print this one item that you just added. What is the result? Can you explain your result?

NaN, because the Memory class is implemented as a Float64Array, which only stores numbers.

What is the purpose of the _resize() function in your Array class?

It increases the memory allocated for the array, as needed.