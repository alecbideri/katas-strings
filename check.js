function check(a , x){

    for (var i = 0 ; i < a.length ; i++){
        if(a[i] === x){
            return true;
        }
    }

    return false ;
}

// easier solution 

function cheK(a ,x){
    if (a.includes(x)){
        return true
    }else {
        return false ;
    }
}
console.log(cheK([101, 45, 75, 105, 99, 107], 108));