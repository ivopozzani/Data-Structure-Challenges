/*
This function will take an array of strings as input and return a string composed of every letter from the words in the input.
The letters in the string will follow the sequence:
* starts by first letter of first word.
* then comes first letter of second word, then first of third word and so on...
* once every first letter has been added the algorithm will move to all second letters in sequence.
* the algorithm will keep adding letters left regardles the size of input strings.
*/

const inputArray = ["Anyworld", "Anyworldwithanysize", "word1234", "anyamount"];

function arrayToString(input) {
  let i = 0;
  let u = 0;
  let control = 0;
  let r = "";
  while (control < input.length) {
    if (input[i].charAt(u)){
      r = `${r}` + `${input[i].charAt(u)}`;
      control = 0;
    } else {
      control++;
    }    
    i++;
    if (i == input.length) {      
      i = 0;
      u++;  
    } 
  }  
  return console.log(r);
} 

arrayToString(inputArray);
