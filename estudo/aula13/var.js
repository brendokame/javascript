let varA = 'A'
let varB = 'B'
let varC = 'C'

/* um forma 
const varATemp = varA
varA = varB 
varB = varC
varC = varATemp 
*/

// Utilizando desestruturação de arrays
[ varA, varB, varC ] = [ varB, varC, varA ]

console.log(varA, varB, varC)


