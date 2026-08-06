//Reverse a string using recursion

// function reverse(str){
//     if(str.length <=1){
//         return str;
//     }

//     let res = reverse(str.slice(1)) + str[0];
//     return res;
// }

// console.log(reverse("akash"));

//time Complexcity :- O(n2) because slice function takes O(n) and we are calling it n times.
//space Complexcity :- O(n) because we are using recursion and recursion takes space in stack.

// function reverse(str){
    
//     if(str.length <=1){
//         return str;
//     }

//     let res = reverse(str.slice(1)) + str[0];
//     return res;
// }

// console.log(reverse("akash"));

function reverseString(str, i=0){
    if(i === str.length-1){
        return str[i];
    }

    let res = reverseString(str, i+1) + str[i]
    return res;
}
console.log(reverseString("akash")); 
