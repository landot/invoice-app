export function generateRandomId() {
    function getRandomLetter() {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      return alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
    }
  
    function getRandomNumber() {
      return Math.floor(Math.random() * 10);
    }
  
    let randomString = '';
    for (let i = 0; i < 2; i++) {
      randomString += getRandomLetter();
    }
    for (let i = 0; i < 4; i++) {
      randomString += getRandomNumber();
    }
  
    return randomString;
  }