function anagram(test , original){
    let testArray = test.toLowerCase().split('').sort().join('');
    let originArray = original.toLowerCase().split('').sort().join('');

  return testArray===originArray;
}

console.log(anagram("Buckethead", "DeathCubeK"));