function correct(string){
    let splitTed = string.split('');
    let newString = [];

    for (var i = 0 ; i < splitTed.length ; i++){
        switch (splitTed[i]){
            case '5' :
                newString.push(s("S")) ;
                break ;
            case '0' :
                newString.push(("O"));
                break ;
            case '1' :
                newString.push("I");
                break ;
            default :
            newString.push(splitTed[i])
            break ;
        }
    }

    return newString.join('');
}

console.log(correct("L0ND0N"));