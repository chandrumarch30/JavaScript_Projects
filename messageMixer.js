const MessageMixer ={};

//function to count the character in a message
MessageMixer.countCharacter= function(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count;
};

// function to capitalize the first character of words
MessageMixer.capitalizeFirstCharacterOfWords =function(string) {
  let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
  return arr.join(" ");
};


//reverse msg words in place
MessageMixer.reverseWord = function(word) {
  return word.split("").reverse().join("");
};

//reversing charcter in place
MessageMixer.reverseAllWords = function(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = MessageMixer.reverseWord(words[i]);
    }
   return words.join(" ");
};

//replace first occurance of string
MessageMixer.replaceFirstOccurence =function(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

//replace all occurance of string
MessageMixer.replaceAllOccurrences= function(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

//encode text by swapping certain characters for other characters
MessageMixer.encode = function(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};

MessageMixer.palindrome= function(str){
  return `${str} ${MessageMixer.reverseWord(str)}`;
}

MessageMixer.pigLatin = function(sentence,character){
  return sentence.split(' ').join(character+' ');
}

module.exports =  MessageMixer;
