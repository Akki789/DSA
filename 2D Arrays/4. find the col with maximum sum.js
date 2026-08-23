//4. find the col with maximum sum
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function maxSum(mat){
    let maxCols = 0;
    let maxSum = -Infinity;
    let rows = mat.length;
    let cols = mat[0].length;

    for(let i=0; i<cols; i++){
        let sum = 0;
        for(let j=0; j<rows; j++){
            sum += mat[j][i]
        }
        if(sum>maxSum){
            maxSum = sum;
            maxCols = i;
        }
    }
    return maxCols
}

console.log(maxSum(matrix));

//practice 2
function maxColSum(mat){
    let maxSum = -Infinity;
    let maxCols = 0;

    for(let i=0; i<mat[0].length; i++){
        let sum = 0;
        for(let j=0; j<mat.length; j++){
            sum += mat[j][i]
        }
        if(sum>maxSum){
            maxSum = sum;
            maxCols = i;
        }
    }
    return maxCols;
}

console.log(maxColSum(matrix));