function isIsogram(string){
    let uniqueString = new Set(string.toLowerCase());
    return uniqueString.size  === string.length;
}

// long way 

function isIsogramm(string){
    for (var i = 0 ; i < string.length ; i++){
      for(var j = i+1 ; j < string.length ; j++){
        if(string[j] === string[i]){
            return false ;
        }
      }
    }

    return true ;
}

console.log(isIsogramm("alec"));