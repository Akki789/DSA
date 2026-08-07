//Count digits of a number using recursion

function countNum(num){
    if(num == 0){
        return 0;
    }

    let count = 1+ countNum(Math.floor(num/10));
    return count;
}

console.log(countNum(1234));
//timecomp:- O(log n) because we are dividing the number by 10 in each recursive call
//spacecomp:- O(log n) because we are using recursion and each recursive call will be stored in the call stack

// function countDigits(num){
//     if(num  === 0){
//         return 0;
//     }

//     let count = 1 + countDigits(Math.floor(num/10));
//     return count;

// }