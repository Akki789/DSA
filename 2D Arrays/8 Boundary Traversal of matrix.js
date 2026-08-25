//Boundary Traversal of matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function boundryTraversal(matrix){
    let rows = matrix.length;
    let cols = matrix[0].length;
    let res = [];

    //let -> right
    for(let j =0; j<cols; j++){
        res.push(matrix[0][j]);
    }

    //top -> bottom
    for(let i=1; i<rows; i++){
        res.push(matrix[i][cols-1]);
    }    

    //right -> left

    if(rows>1){
        for(let i=cols-2; i>=0; i--){
            res.push(matrix[rows-1][i])
        }
    }

    //bottom -> top
    if(cols>1){
        for(let i=rows-2; i>0; i--){
            res.push(matrix[i][0])
        }
    }

    return res;
}

console.log(boundryTraversal(matrix));