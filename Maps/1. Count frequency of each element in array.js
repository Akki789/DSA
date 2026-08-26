//1. Count frequency of each element in array
function countFreq(arr){
    let freq = {};
    for(let elem of arr){
        freq[elem] = (freq[elem] || 0) +1;
    }
    return freq;
}

console.log(countFreq([1, 2, 2, 3, 1, 2]));