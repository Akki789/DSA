// //5 Find majority element (appears > N/2 times)
// function majorityElement(arr){
//     let candidate = null;
//     let count =0;

//     for(let num of arr){
//         if(count === 0){
//             candidate = num;
//         }

//         if(num == candidate){
//             count++
//         }else{
//             count--
//         }
//     }
//     console.log(count);


//     //verify
//     count = 0

//     for(let num of arr){
//         if(num == candidate){
//             count++
//         }
//     }
//     console.log(count);

//     if(count > arr.length/2){
//         return candidate;
//     }

//     return "No majority element";
// }

// console.log(majorityElement([2,2,1,2,3,2,2]));
//O(n), O(1)
//practice 2
function findMajority(arr){
    let freq = {};
    
    for(let elem of arr){
        freq[elem] = (freq[elem] || 0) +1
        if(freq[elem] > arr.length/2){
            return elem
        }
    }
    
}
console.log(findMajority([2,2,1,2,3,2,2]));