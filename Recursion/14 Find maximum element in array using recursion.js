//Find maximum element in array using recursion

// function findMax(arr, i=0){
//     if(i == arr.length -1){
//         return arr[i]
//     }

//     //recursive call
//     let max = findMax(arr, i+1);
//     return Math.max(arr[i], max);
// }
// console.log(findMax([2,9,4,6,3,7,2,8]));
//timecomp :- O(n) because every element is visited exactly once
//spacecomp:- O(n)

function maxElement(arr, i=0){
    if(i== arr.length-1){
        return arr[i]
    }

    let max = maxElement(arr, i+1);
    return Math.max(arr[i], max)
}

console.log(maxElement([2,9,4,6,3,7,2,8]));