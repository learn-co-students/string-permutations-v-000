function findAllPermutations(string) {
  if (string && string.length <= 1) {
    return string;
  }
  
  const permutations = [];

  for(let i = 0; i < string.length; i++) {
    let char = string[i];
    let remaindingChars = string.slice(0, i) + string.slice(i + 1);
    
    for (let permutation of findAllPermutations(remaindingChars)) {
      permutations.push(char + permutation);
    }
  }
  
  return permutations;
}