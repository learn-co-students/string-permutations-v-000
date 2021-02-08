function findAllPermutations(string) {
  if (string && string.length <= 1) {
    return string;
  }
  
  const permutations = [];

  for(let i = 0; i < string.length; i++) {
    let char = string[i];
    let remainder = string.slice(0, i) + string.slice(i + 1, string.length);
    
    for (let permutation of findAllPermutations(remainder)) {
      permutations.push(char + permutation);
    }
  }
  
  return permutations;
}