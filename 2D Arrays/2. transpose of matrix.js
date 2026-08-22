// 2. transpose of matrix

function transposeMat(mat){
    let transpose = []
    let rows = mat.length;
    let cols = mat[0].length;

    for(let i=0; i<cols; i++){
        transpose[i] = [];
        for(let j=0; j<rows; j++){
            transpose[i][j] = mat[j][i];
        }
    }
    return transpose;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(transposeMat(matrix));

//practice 2
function transpose(mat){
    let res = [];
    let rows = mat.length;
    let cols = mat[0].length;

    for(let i=0; i<cols; i++){
        res[i] = []
        for(let j=0; j<rows; j++){
            res[i][j] = mat[j][i]
        }
    }
    return res;
}

console.log(transpose(matrix));