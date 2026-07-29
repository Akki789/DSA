//Find the largest element in an array || Traversal
let arr = [4, 7, 1, 9, 2]
function LargestElement(arr){
    let largest = arr[0];

    for(let i=0; i<arr.length-1; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest;
}

let lar = LargestElement(arr);
console.log(lar);