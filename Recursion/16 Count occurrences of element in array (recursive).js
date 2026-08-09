//Count occurrences of an element in array (recursive)

// function countOccur(arr, target,i=0){
//     if(i == arr.length){
//         return 0;
//     }

//     if(arr[i] == target){
//         return 1 + countOccur(arr, target, i+1);
//     }

//     return countOccur(arr, target, i+1)
// }

// console.log(countOccur([2,6,4,6,4,9,5,4], 4));

function countOccur(arr, target, i=0){
    if(i == arr.length){
        return 0;
    }

    if(arr[i] == target){
        return 1 + countOccur(arr, target, i+1)
    }

    return countOccur(arr, target, i+1)
}
console.log(countOccur([2,6,4,6,4,9,5,4], 4));

