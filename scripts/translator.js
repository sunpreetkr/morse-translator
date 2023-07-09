import { engMorseDict } from "./morsedict.js";

export const morseEnglishDict = {};
Object.keys(engMorseDict).forEach((char) => {
  const morseCode = engMorseDict[char];
  morseEnglishDict[morseCode] = char;
});


//function to translate eng text to morse code
export const engToMorse = (text) => {
  if (text.match(/[0-9@$%^&*()_+={}|[\]\\:;"'<>,.?/-]/)) {
    throw new Error("Text should contain english alphabet or space only for english to morse code translation");
  } 
    const words = text.trim().toLowerCase().split(' ');
    const morseCodeArr = words.map(word => {
      const charactersArr = word.split('');
      const morseCodeChars = charactersArr.map(char => engMorseDict[char] || '').join(' ');
      return morseCodeChars;
    });
    return morseCodeArr.join(' / ');
  
};



//function to translate morse code to eng text
export const morseToEnglish  = (text) => {
  if (text.match(/[^.\s-/]/)) {
    throw new Error("Error: Please ensure that the code only consists of ., -, / or  space. Please separate each letter by space and words by '/'.");
  }
  const morseCode = text.trim().split('/');
  const engArr = morseCode.map(ch => {
    const morseCharsArr = ch.trim().split(' ');
    const EngChars = morseCharsArr.map(code => morseEnglishDict[code] || '').join('');
    return EngChars;
  });
  return engArr.join(' ');
};