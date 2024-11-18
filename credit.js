function maskify(credit){
    let string = credit.split('');
    let newArray = [];
    let needed = string.length - 4  ;
    let count = 0 ;

    for (var i = 0 ; i < string.length ; i++){
        if(needed > count){
            newArray.push("#");
            count ++ ;
        }else{
            newArray.push(string[i]);
        }
    }

    return newArray.join('') ;
}

console.log(maskify("1111"));