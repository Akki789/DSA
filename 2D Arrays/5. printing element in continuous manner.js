//5. printing element in continuous manner(zig-zag (continuous/snake) traversal.)

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let res = [];
let rows = mat.length;
let cols = mat[0].length;

for(let i=0; i<cols; i++){
    if(i%2 == 0){
        for(let j=0;j<rows; j++){
            res.push(mat[j][i]);
        }
    }else{
        for(let j =rows-1; j>=0; j--){
            res.push(mat[j][i])
        }
    }
}
console.log(res.join(" "));

//practice 2
function printContElem(mat){
    let res = [];
    for(let i=0; i<mat.length; i++){
        if(i%2 ==0){
            for(let j=0; j<mat[0].length; j++){
                res.push(mat[i][j])
            }
        }else{
            for(let j= mat[0].length - 1; j>=0; j-- ){
                res.push(mat[i][j])
            }
        }
    }

    return res.join(" ");
}

console.log(printContElem(mat));