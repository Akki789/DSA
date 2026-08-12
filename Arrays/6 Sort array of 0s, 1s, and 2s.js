//6 Sort array of 0s, 1s, and 2s
function sortArray(arr){
    let low = 0;
    let mid = 0;
    let high = arr.length-1;

    while(mid<=high){
        if(arr[mid] === 0){
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++
            mid++
        }else if(arr[mid] === 1){
            mid++
        }else{
             [arr[mid], arr[high]] = [arr[high], arr[mid]];
             high--
        }
    }
    return arr;
}
console.log(sortArray([2, 1,0, 2, 1, 1,2, 0]));
//O(n), O(1)

//practice 2
function sortArray(arr){
    let low =0;
    let mid = 0;
    let high = arr.length-1;

    while(mid<=high){
        if(arr[mid] == 0){
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++
            mid++
        }else if(arr[mid] ==1){
            mid++
        }else{
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--
        }
    }
    return arr;
}
console.log(sortArray([2, 1, 0, 2, 1, 1, 2, 0]));