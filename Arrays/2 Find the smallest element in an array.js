//Find the smallest element in an array || Traversal

function SmallestElement(arr){
    let smallest = arr[0];

    for(let i =0; i<arr.length-1; i++){
        if(arr[i]<smallest){
            smallest = arr[i]
        }
    }
    return smallest;
}

let numbers = [4, 7, 1, 9, 2];

let small = SmallestElement(numbers);
console.log(small);
