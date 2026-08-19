//6 Check if two strings are equal (ignore case)
function areStringsEqual(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {

        let ch1 = str1[i];
        let ch2 = str2[i];

        if (ch1.toLowerCase() !== ch2.toLowerCase()) {
            return false;
        }

    }

    return true;
}

console.log(areStringsEqual("Hello", "HELLO"));