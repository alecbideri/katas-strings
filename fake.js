function fakeBin(x){
    let splitedString = x.split('');
    let newString = [];

    for (var i = 0 ; i < splitedString.length ; i++){
        if(splitedString[i] < 5){
            newString.push("0");
        }else if (splitedString[i]>=5){
            newString.push("1");
        }else {
            newString.push(splitedString[i]);
        }
    }
    
    return newString.join('');
}

console.log(fakeBin('45385593107843568'));