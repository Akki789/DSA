// //Flatten a nested array using recursion

// function flatArr(arr){
//     let result = [];

//     for(let elem of arr){
//         if(Array.isArray(elem)){
//             result.push(...flatArr(elem));
//         } else {
//             result.push(elem);
//         }
//     }
//     return result;
// }

// console.log(flatArr([1, [2, [3, 4], 5], 6]));
//O(n), O(n)

function flattenArray(arr){
    let res = [];
    for(let elem of arr){
        if(Array.isArray(elem)){
            res.push(...flattenArray(elem))
        }else{
            res.push(elem)
        }
    }
    return res;
}
console.log(flattenArray([1, [2, [3, 4], 5], 6]));