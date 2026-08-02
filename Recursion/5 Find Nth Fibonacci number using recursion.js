//Find Nth Fibonacci number using recursion

function fibonacciNumber(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    
    let res = fibonacciNumber(n-1) + fibonacciNumber(n-2)
    return res;
}

console.log(fibonacciNumber(6));