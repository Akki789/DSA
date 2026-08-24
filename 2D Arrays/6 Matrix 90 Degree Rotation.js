// //Matrix 90 Degree Rotation
// function rotateMatrix90(mat){
//     let n = mat.length;
//     //transpose
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
//             let temp = mat[i][j];
//             mat[i][j] = mat[j][i]
//             mat[j][i] = temp;

            
//         }
//     }

//     //reverse every row
//     for(let i=0; i<n; i++){
//         let left = 0;
//         let right = n-1;
//         while(left<right){
//             let temp = mat[i][left];
//             mat[i][left] = mat[i][right];
//             mat[i][right] = temp;
//             left++;
//             right--;
//         }
//     }
//     return mat;
// }

let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
// console.log(rotateMatrix90(mat));
// //O(n2), O(1)


// //practice 2
// function rotateMat90(mat){
//     //transpose first
//     let n = mat.length;
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
//             [mat[i][j], mat[j][i]] = [mat[j][i],mat[i][j]]
//         }
//     }

//     //reverse
//     for(let i=0; i<n; i++){
//         let left =0;
//         let right = n-1;

//         while(left < right){
//             [mat[i][left], mat[i][right]] = [mat[i][right], mat[i][left]]
//             left++
//             right--
//         }
//     }
//     return mat;
// }

// console.log(rotateMat90(mat));

//practice 3
function rotateMat(mat){
    let n = mat.length;
    //transpose first
    for(let i=0; i<n; i++){
        for(let j= i+1; j<n; j++){
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
        }
    }

    //reverse
    for(let i=0; i<n; i++){
        let left =0;
        let right = n-1;
        while(left < right){
            [mat[i][left], mat[i][right]] = [mat[i][right], mat[i][left]];
            left++
            right--
        }
    }
    return mat;
}
console.log(rotateMat(mat));