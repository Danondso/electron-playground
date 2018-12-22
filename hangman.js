

var word = ['TEST', 'FALSE PROPHET', 'INTERLOPER']
var chosenWord;
function initializeWord(){
    //TODO read in a dictionary, get a word out of it. 
    chosenWord = word[Math.random(0, 2)];
    console.log(word);
}

function guess(guess){
  if(String.length(guess) != 1)
  {
      return "You might check the length of your guess stranger..";
  } else {
      if(chosenWord.includes(guess))
      {
          
      }
  }
}