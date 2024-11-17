function feast(beast , dish){
    let beastArr = beast.split('');
    let dishArr = dish.split('');
    
    if (beastArr[0].codePointAt(0) === dishArr[0].codePointAt(0) && beastArr[beast.length - 1].codePointAt(0) === dishArr[dish.length -1].codePointAt(0) ){
        return true;
    }else{
        return false ;
    }
}

console.log(feast("great blue heron", "garlic naas"));