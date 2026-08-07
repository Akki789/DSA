//Sum of first N natural numbers using recursion

function sum(n){
    if(n ==0){
        return 0;
    }

    let res = sum(n-1);
    return n + res;
}

console.log(sum(4));
//timecomp:- O(n) because One recursive call for every number 
//spacecomp:- O(n) because maximum depth of recursion will be n
