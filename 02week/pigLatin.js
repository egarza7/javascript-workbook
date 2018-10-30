//make array that holds vowels
//check if first letter of input is vowel
//if true- add 'yay' to end of string
//if false- check for consonant
//check each letter, making each consonant go to the end of the string 
//when vowel is hit, add 'ay' to string
// turn all inputs into lowercase and remove whitespace

/*add letters as you go by checking for consonant so when one hits you move that string to the end (ex "c h e c k: you would go
c+h then when you hit e, you move the string to the end so  eckchay")*/


'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  const vowels = ['a','e','i','o','u'];
  const userInput = word.trim().toLowerCase().split('');

  if (vowels.includes(word.charAt(0))) {
    return word += 'yay';
  } else {
    for (var i = 0; i < word.length; i++) {
      if (!vowels.includes(word[i])) {
        userInput.push(userInput.shift());
      } else {
        userInput.push('ay');
        return userInput.join('');
      }
    }
  }


}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
