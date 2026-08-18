//3 Count vowels and consonants in a string

function countVowelsandConso(str){
    let vowels = 0;
    let conso = 0;

    str = str.toLowerCase();
    let v = "aeiou";

    for(let elem of str){
        if(v.includes(elem)){
            vowels++
        }else if(elem>="a" && elem<="z"){
            conso++
        }
    }
    console.log(vowels);
    console.log(conso);

}

countVowelsandConso("Akash")