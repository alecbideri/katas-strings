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

function decryption(s,n){
    if(!s || n <= 0){
        return s ;
    }

    let currentArray = s.split('');

    for (var i = 0 ; i < n ; i++){
        const midIndex = Math.floor(currentArray.length/2);
        const oddArray = currentArray.slice(0 , midIndex);
        const evenArray = currentArray.slice(midIndex);

        const reverseArray = [];

        for (var j = 0 ; j < midIndex ; j++){
            reverseArray.push(evenArray[j]);
            reverseArray.push(oddArray[j]);
        }

        if(currentArray.length%2!==0){
            reverseArray.push(evenArray[midIndex]);
        }
        
        currentArray = reverseArray;
    }

    return currentArray.join('')
}

console.log(encryption("012345", 2));
console.log(decryption("304152" , 2));