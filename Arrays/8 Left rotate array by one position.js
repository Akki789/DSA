//8 Left rotate array by one position
// function leftRotate(arr){
//     let temp = arr[0];
//     let n = arr.length-1;
//     for(let i = 1; i<n; i++){
//         arr[i-1] = arr[i]
//     }
//     arr[n-1] = temp;
//     return arr;
// }
// console.log(leftRotate([1,2,3,4,5]));

function leftRotate(arr){
    let n = arr.length;
    let temp = arr[0];
    for(let i=1; i<n; i++){
        arr[i-1] = arr[i];
    }
    arr[n-1] = temp;
    return arr;
}
console.log(leftRotate([1,2,3,4,5]));

//practice 3
function leftRotateByOne(arr){
    let n = arr.length;
    let temp = arr[0];

    for(let i=1; i<n; i++){
        arr[i-1] = arr[i]
    }
    arr[i-1] = temp;
    return arr;
}