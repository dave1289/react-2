const square = [
   [1, 2, 3, 4],
   [5, 6, 7, 8],
   [9, 10, 11, 12],
   [13, 14, 15, 16]
];

function unroll(squareArray) {
   let unrolled = []
   while (squareArray.length > 0) {
   // grab top row
       unrolled = [...unrolled, squareArray.shift()]
   // grab right column
       unrolled = [...unrolled, squareArray.map(row => row.pop())]
   // grab bottom row and reverse it
       unrolled = [...unrolled, squareArray.pop().reverse()]
   // grab left column and reverse it
       unrolled = [...unrolled, squareArray.map(row => row.shift()).reverse()]
   }
   return unrolled.flat()
   }

unroll(square)

module.exports = unroll;
