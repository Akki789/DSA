//7 Count words in a sentence
// function countWords(str){
//     let count =0;
//     str = str.trim().split(" ")

//     return str.length;
// }

function countWords2(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && (i === 0 || str[i - 1] === " ")) {
      count++;
    }
  }
  return count;
}
console.log(countWords2("akash is coding"));
//O(n), O(1)
