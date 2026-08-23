//3. find the row with maximum sum
function maxSum(mat) {
  let maxSum = -Infinity;
  let maxRow = 0;

  for (let i = 0; i < mat.length; i++) {
    let sum = 0;
    for (let j = 0; j < mat[i].length; j++) {
      sum += mat[i][j];
    }
    if (sum > maxSum) {
      maxSum = sum;
      maxRow = mat[i];
    }
  }
  return maxRow;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(maxSum(matrix));

//practice 2
function maxRowSum(mat){
  let maxSum = -Infinity;
  let maxRow = 0;

  for(let i=0; i<mat.length; i++){
    let sum = 0;
    for(let j=0; j<mat[i].length; j++){
      sum += mat[i][j]
    }
    if(sum > maxSum){
      maxSum = sum;
      maxRow = mat[i]
    }
  }

  return maxRow;
}

console.log(maxRowSum(matrix));
