//1. sum of all elem in matrix

function sum(mat){
    let sum = 0;
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[i].length; j++){
            sum += mat[i][j]
        }
    }
    return sum;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(sum(matrix));
//timecomp:- O(r*c)
//spacecomp:- O(n) sum only

function sumOfMat(mat){
    let sum = 0;

    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[i].length; j++){
            sum += mat[i][j]
        }
    }
    return sum;
}

console.log(sumOfMat(matrix));