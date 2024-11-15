function vowel(string){
    let splitTed = string.split('');
    let newString = [];
    let vowels = ['a' , 'e' , 'i' , 'o' , 'u'];

    for (var i = 0 ; i < splitTed.length ; i++){
        if(!vowels.includes(splitTed[i].toLowerCase())){
            newString.push(splitTed[i]);
        }
    }

    return newString.join('');
}

// easier way 

function disemvowel(string){
    return string.replace(/[aeiou]/gi , '');
}

console.log(vowel("My name is Alec"));