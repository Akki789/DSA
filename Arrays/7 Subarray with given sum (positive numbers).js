//7 Subarray with given sum (positive numbers)
function subarray(arr, k){
    let left = 0;
    let sum =0;

    for(let right =0; right<arr.length; right++){
        sum += arr[right];
        while(sum>k){
            sum-=arr[left];
            left++
        }

        if(sum === k){
            return arr.slice(left, right+1)
        }
    }
    return "No Subarray found"
}
console.log(subarray([1,2,3,7,5], 12));
//O(n), O(1)

//practice2
function subArray(arr,k){
    let left =0; 
    let sum=0;
    for(let right =0; right<arr.length; right++){
        sum += arr[right];
        while(sum>k){
            sum-=arr[left]
            left++
        }

        if(sum == k){
            return arr.slice(left, right+1)
        }
    }
    return "No subarray found"
}
console.log(subArray([1,2,3,7,5], 12));
