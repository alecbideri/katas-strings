function strigntoArray(string){
    let splitedString = string.split(" ");
    let newArray = [];
    
    for(var i = 0 ; i < splitedString.length ; i++){
        newArray.push(splitedString[i]);
    }

    return newArray;
}

console.log(strigntoArray("Robin Singh"));