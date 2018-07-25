# damian-harley-dsa-arrays

What is the length, capacity and memory address of your array?

Array { length: 1, _capacity: 3, ptr: 0 }

What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code

Array { length: 6, _capacity: 12, ptr: 3 }

The array has length 6 because we pushed 6 values to it.  It's capacity was expanded to 3 after 1 push.  when we pushed the 4th value, the array's capacity was increased by triple its present length, which would be 3*3.  9 added to capacity 3 results in capacity 12.  The memory address of the array is 3 because that's the last index where capacity was increased.  

