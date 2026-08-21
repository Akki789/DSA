//Check if two strings are anagrams
function checkAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    let freq = {};

    for(let ch of str1){
        freq[ch] = (freq[ch] || 0) + 1;
    }
    for(let ch of str2){
        if(!freq[ch]){
            return false;
        }
        freq[ch]--
    }
    return true;
}
console.log(checkAnagram("listen", "silent"));