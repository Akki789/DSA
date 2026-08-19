//5 Find length of string without using built-in

function lengthOfString(str){
    let count = 0;
    for(let ch of str){
        count++;
    }
    return count;
}
console.log(lengthOfString("Akash"));