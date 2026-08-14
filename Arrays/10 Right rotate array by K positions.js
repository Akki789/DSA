// Right rotate array by K positions
function reverse(arr, start, end){
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++
        end--
    }
}

function rotateRightArray(arr, k){
    let n = arr.length;

    k = k%n;

    reverse(arr, 0, n-1);
    reverse(arr, 0, k-1);
    reverse(arr, k, n-1);

    return arr;
}

console.log(rotateRightArray([1,2,3,4,5], 2));