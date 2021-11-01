const inputArray = ["Anyworld", "Anyworldwithanysize", "word1234", "anyamount"];

function stringToMatriz(input) {
  let i = 0;
  let u = 0;
  let control = 0;
  let r = "";
  while (control != input.length) {
    if (input[i].charAt(u)){
      r = `${r}` + `${input[i].charAt(u)}`
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
  
  return console.log(r)
} 

stringToMatriz(inputArray);
