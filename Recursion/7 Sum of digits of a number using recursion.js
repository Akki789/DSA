//Sum of digits of a number using recursion

function sum(n){
    if(n==0){
        return 0;
    }

    let a = n%10;
    let b = Math.floor(sum(n/10));

    return a+b;
}

console.log(sum(123));