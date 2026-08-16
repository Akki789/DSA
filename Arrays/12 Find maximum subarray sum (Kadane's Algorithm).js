//Find maximum subarray sum (Kadane's Algorithm)
function maximumSum(arr){
    let currentSum = 0;
    let maxSum = -Infinity;

    for(let elem of arr){
        currentSum += elem;

        maxSum = Math.max(currentSum, maxSum)

        if(currentSum < 0){
            currentSum = 0;
        }
    }
    return maxSum;
}
console.log(maximumSum([-2,1,-3,4,-1,2,1,-5,4]));

//practice 2
function maximumSubArray(arr){
    let currentSum = 0;
    let maxSum = -Infinity;

    for(let num of arr){
        currentSum += num;

        maxSum = Math.max(currentSum, maxSum)
        if(currentSum< 0){
            currentSum =0
        }
    }
    return maxSum;
}
console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]));