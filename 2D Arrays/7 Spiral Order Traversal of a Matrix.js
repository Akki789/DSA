//Spiral Order Traversal of a Matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// function spiralTraversal(matrix) {
//   let rows = matrix.length;
//   let cols = matrix[0].length;

//   let top = 0;
//   let bottom = rows - 1;

//   let left = 0;
//   let right = cols - 1;

//   let res = [];

//   while (top <= bottom && left <= right) {
//     //left->right
//     for (let i = left; i <= right; i++) {
//       res.push(matrix[top][i]);
//     }
//     top++;

//     //top -> bottom
//     for (let i = top; i <= bottom; i++) {
//       res.push(matrix[i][right]);
//     }
//     right--;

//     //right -> left
//     if (top <= bottom) {
//       for (let i = right; i >= left; i--) {
//         res.push(matrix[bottom][i]);
//       }
//       bottom--;
//     }

//     //bottom -> top
//     if (left <= right) {
//       for (let i = bottom; i >= top; i--) {
//         res.push(matrix[i][left]);
//       }
//       left++;
//     }
//   }
//   return res;
// }
// console.log(spiralTraversal(matrix));

//practice 2
function spiralMat(mat) {
  let top = 0;
  let bottom = mat.length - 1;

  let left = 0;
  let right = mat[0].length - 1;

  let res = [];

  while (left <= right && top <= bottom) {
    //left to right
    for (let i = left; i <= right; i++) {
      res.push(mat[top][i]);
    }
    top++

    //top to bottom
    for (let i = top; i <= bottom; i++) {
      res.push(mat[i][right]);
    }
    right--

    //right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(mat[bottom][i]);
      }
      bottom--
    }

    //bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(mat[i][left]);
      }
      left++
    }
  }
  return res;
}
console.log(spiralMat(matrix));

//practice 3

