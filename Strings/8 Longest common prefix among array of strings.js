//Longest common prefix among array of strings
function longestPrefix(arr){
    if(arr.length ==0){
        return ""
    }

    let prefix = "";
    for(let i=0; i<arr[0].length; i++){
        let ch = arr[0][i];

        for(let j=1; j<arr.length; j++){
            if(i > arr[j].length || arr[j][i] !== ch){
                return prefix;
            }
        }
        prefix += ch;
    }
    return prefix;
}
console.log(longestPrefix(["flower", "flow", "flight"]));

//practice 2
function longestCommonPrefix(arr) {

    if (arr.length === 0) {
        return "";
    }

    let prefix = arr[0];

    for (let i = 1; i < arr.length; i++) {

        while (!arr[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
        }

    }

    return prefix;
}

console.log(
    longestCommonPrefix(["flower", "flow", "flight"])
);