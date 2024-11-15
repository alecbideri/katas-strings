function abbrevName(name){
 let splitedString = name.split(' ');
 let newString = [];

 for ( var i = 0 ; i < splitedString.length ; i++){
    newString.push(splitedString[i][0].toUpperCase());
 }

 let abbreviation = "";

 for (var j = 0 ; j < newString.length ; j++){
    abbreviation += newString[j];
    if(j < newString.length -1 ){
        abbreviation += ".";
    }
 }

 return abbreviation;

}

console.log(abbrevName("Sam Harris"));