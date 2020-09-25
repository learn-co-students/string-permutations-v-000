// https://initjs.org/all-permutations-of-a-set-f1be174c79f8
// https://js-algorithms.tutorialhorizon.com/2015/11/20/generate-permutations-backtracking/

function findAllPermutations(str) {
  const results = [];

  if (str.length == 1) {
    results.push(str);
    return results;
  }

  const strArray = str.split('');

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const leftChars = str.substring(0, i) + str.substring(i + 1);
    let leftPermutations = findAllPermutations(leftChars);
    for (let j = 0; j < leftPermutations.length; j++) {
      results.push(firstChar + leftPermutations[j]);
    }
  }
  return results;
}
