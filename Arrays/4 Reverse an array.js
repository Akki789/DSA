//Reverse an array || Two Pointers
function reverseArray(arr){
    let left =0;
    let right  = arr.length-1;
    // let res = [];

    while(left<right){
        let temp = arr[left];
        arr[left] = arr[right]
        arr[right] = temp;
        left++
        right--
    }

    return arr;
}

console.log(reverseArray([1,3,4,5,6,7]));


























// function reverseArray(arr){
//     let left = 0;
//     let right = arr.length-1;
    
    
//    while(left < right){
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++
//     right--
//    }

//    return arr;
// }

// let arr = [5,9,8,3,7,1,6]
// let res = reverseArray(arr);
// console.log(res);
