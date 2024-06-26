function isAdult(x) {
    if (x >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log(`Exercise 2 Result`, isAdult(21));

function isCharAVowel(x){
    if(x=5){
        return "True";
    }else {
        return "false";
    }
}
console.log(`Exercise 3 Result`, isCharAVowel("4"));

function generateEmail(name, domain)
{return name + "@" + domain;

}
console.log(`Exercise 4 Result`, generateEmail ("Ericdu" , "harborindustry.com"))