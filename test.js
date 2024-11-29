function decrypt(s, n) {
    if (!s || n <= 0) {
      return s;
    }
  
    let currentArray = s.split('');
  
    for (let i = 0; i < n; i++) {
      const midIndex = Math.floor(currentArray.length / 2);
      const oddArray = currentArray.slice(0, midIndex);
      const evenArray = currentArray.slice(midIndex);
  
      const reversedArray = [];
  
      // Interleave the characters, ensuring correct handling of odd-length strings
      for (let j = 0; j < midIndex; j++) {
        reversedArray.push(evenArray[j]);
        reversedArray.push(oddArray[j]);
      }
      // If the string length is odd, append the extra character from the even array
      if (currentArray.length % 2 !== 0) {
        reversedArray.push(evenArray[midIndex]);
      }
  
      currentArray = reversedArray;
    }
  
    return currentArray.join('');
  }

  console.log(decrypt(" Tah itse sits!", 3))