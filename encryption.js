function encryption(s,n){
    if(!s || n <= 0){
        return s ;
    }

    let currentArray = s.split('');

    for(var i = 0 ; i < n ; i++){
        let oddArray = [] ;
        let EvenArray = [] ;

        for(var j = 0 ; j < currentArray.length ; j++){
            if(j%2!==0){
                oddArray.push(currentArray[j]);
            }else{
                EvenArray.push(currentArray[j]);
            }
        }

        currentArray = [...oddArray , ...EvenArray];
    }

    return currentArray.join('') ; 
 
}

console.log(encryption("012345", 2));