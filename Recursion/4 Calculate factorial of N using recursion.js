//Calculate factorial of N using recursion

function factorial(n){
    if(n==1){
        return 1;
    }

    let fact = factorial(n-1);
    return fact * n;
}

console.log(factorial(5));