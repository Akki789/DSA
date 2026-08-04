//Check palindrome using recursion

function checkPalindrome(str, left=0, right = str.length -1){
    if(left >= right){
        return true;
    }

    if(str[left] !== str[right]){  
        return false;              //timeComplex :- O(n)
    }

    return checkPalindrome(str, left+1, right-1)
}

console.log(checkPalindrome("madam")); //true
console.log(checkPalindrome("akash")); //false
//timecomplex :- O(n)  because we are traversing half of the string and checking the characters. n/2 => O(n)
//timeComplex :- O(n) beacause maximum recursion depth can be n/2 => O(n) and recursion takes space in stack.

// function palindrome(str, left=0, right=str.length-1){
    

//     if(left>=right){
//         return true;
//     }

//     if(str[left] !== str[right]){
//         return false;
//     }

//     return palindrome(str, left+1, right-1)


// }
// console.log(palindrome("madam"));