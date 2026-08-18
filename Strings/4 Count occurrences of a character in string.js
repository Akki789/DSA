//4 Count occurrences of a character in string
function countOccur(str, target){
    let count = 0;
    str = str.toLowerCase();

    for(let ch of str){
        if(ch === target){
            count++
        }
    }
    return count;
}
console.log(countOccur("Akash", "a"));
//O(n), O(1)