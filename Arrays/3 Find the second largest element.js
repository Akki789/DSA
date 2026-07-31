//Find the second largest element || Traversal

function SecondLargestElement(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];

        }else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i]
        }
    }

    return secondLargest;
}

let arr = [4, 7, 1, 9, 2]

let second = SecondLargestElement(arr);
console.log(second);