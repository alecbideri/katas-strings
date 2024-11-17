function reverseWords(string){
    
    let newArray = string.split(' ');
    let newString = [];

    for(var i = 0 ; i < newArray.length ; i++){
        newString.push(newArray[i].split('').reverse().join(''));
    }

    return newString.join(' ');
    
}

console.log(reverseWords("This is an example!"));