// Left rotate array by K positions

function reverse(arr, start, end){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];

        start++
        end--
    }

}

function rotateLeftArray(arr, k){
    let n = arr.length;
    k = k%n;

    reverse(arr, 0, k-1);
    reverse(arr, k, n-1);
    reverse(arr, 0, n-1);

    return arr;
}
console.log(rotateLeftArray([1,2,3,4,5], 3));
//O(n), O(1)


//prCTICE 2
function reverse(arr,left,right){
    while(left<right){
        [arr[left], arr[right]] =[arr[right], arr[left]]
        left++
        right--
    }
}

function rotate(arr, k){
    let n = arr.length;
    k=k%n;

    reverse(arr, 0, k-1)
    reverse(arr, k, n-1)
    reverse(arr, 0, n-1)
    return arr;

}

console.log(rotate([1,2,3,4,5], 3));