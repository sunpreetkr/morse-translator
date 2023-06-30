import { morseEnglishDict, engToMorse, morseToEnglish } from "./translator.js";

// Selecting DOM element
const translateBtn = document.getElementById('translateBtn');

// Translate button click event
translateBtn.addEventListener('click', () => {
	const inputText = document.getElementById('textInput').value;
  const resultTextArea = document.getElementById('translatedText'); 
  if (inputText.startsWith('.') || inputText.startsWith('-')|| inputText.startsWith(' ')) {
    // Morse Code to English translation
    if (inputText.match(/[^.\s-/]/)) {
      // Alert for invalid characters 
      alert("Error: Please ensure that the code only consists of ., -, / or  space for morse code to english translation. Please separate each letter by space and words by '/'.");
    } else {
      const translatedText = morseToEnglish(inputText);
      resultTextArea.value = translatedText;
    }
  } 
  else {
    // English to Morse Code translation
    if (inputText.match(/[0-9@$%^&*()_+={}|[\]\\:;"'<>,.?/#-]/)) {
      // Alert for invalid characters
      alert("Text should contain english alphabet or space only for english to morse code translation");
    } else {
      const translatedText = engToMorse(inputText);
      resultTextArea.value = translatedText;
    }
  }
  
});


// Clear button click event
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
  document.getElementById('textInput').value = '';
  document.getElementById('translatedText').value = '';
});