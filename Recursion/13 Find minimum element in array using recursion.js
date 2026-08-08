//Find minimum element in array using recursion

function findMin(arr, i=0){
    if(i == arr.length-1){
        return arr[i]
    }

    //revursive call
    let min = findMin(arr, i+1)
    return Math.min(arr[i], min);
}

console.log(findMin([2,6,8,3,7,6]));
//timecomp :- O(n) because every element is visited exactly once
//spacecomp:- O(n)