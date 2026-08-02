//Calculate power of a number (x^n)

function power(x, n){
    if(n == 0){
        return 1;
    }
   let res = power(x, n-1)
   return res * x;
}

console.log(power(2, 4));