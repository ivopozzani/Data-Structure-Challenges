
function stringToMatriz(vetor) {
  let i = 0;
  let u = 0;
  let control = 0;
  let r = "";
  while (i < vetor.length && control != vetor.length) {
    if (vetor[i].charAt(u)){
      r = `${r}` + `${vetor[i].charAt(u)}`
      control = 0;
    } else {
      control++;
    }
    
    i++;
    if (i == vetor.length) {      
      i = 0;
      u++;  
    } 
  }
  
  return console.log(r)
} 

const vetString = ["abcdefghijklmnopqrstuvwxyz", "abcdefghijklm", "abcdefghi", "abcdefghijklm"];
stringToMatriz(vetString);
