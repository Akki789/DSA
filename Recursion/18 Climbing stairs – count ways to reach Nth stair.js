//Climbing stairs – count ways to reach Nth stair

function climbStairs(n){
    if(n==0 || n==1){
        return 1
    }

    let res = climbStairs(n-1) + climbStairs(n-2)
    return res;
}
console.log(climbStairs(5));

//Practice 2
function climbStairs(n){
    if(n==0 || n==1){
        return 1;
    }

    let res = climbStairs(n-1) + climbStairs(n-2)
    return res;
}
console.log(climbStairs(5));