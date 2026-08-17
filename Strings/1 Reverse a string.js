//1 Reverse a string
function reverse(str){
    let left =0;
    let right = str.length-1;
    let arr = str.split("");
    console.log(arr);

    while(left<right){
       
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++
        right--
    }
    return arr.join("");
}

console.log(reverse("Akash"));
//O(n), O(n)