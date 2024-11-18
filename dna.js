function dnaStrand(dna){
    let newString = dna.split('');
    let newArray = [];

    for ( var i = 0 ;i < newString.length ; i++){
        if(newString[i] === "A"){
            newArray.push("T");
        }else if (newString[i] === "T"){
            newArray.push("A");
        }else if (newString[i] === "C"){
            newArray.push("G");
        }else{
            newArray.push("C");
        }
    }

    return newArray.join('');
}

console.log(dnaStrand("ATTGC"));