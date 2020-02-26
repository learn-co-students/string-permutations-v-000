function findAllPermutations(str) {
    if (str.length === 1) return [str]
  
    let permutations = []
    for (let i = 0; i < str.length; i++) {
      const current = str[i]
      const rest = str.slice(0, i) + str.slice(i + 1)
      const permsOfRest = findAllPermutations(rest)
      permsOfRest.forEach(perm => {
        permutations.push(current + perm)
      })
    }
    return permutations
  }