
const solutionFunctions = require('./index');

console.log("🚀 ~ Expect returns 0 for n = 0 ~ 🚀")
console.log(`sum_to_n_a(0) = ${solutionFunctions.sum_to_n_a(0)}`)
console.log(`sum_to_n_a(0) = ${solutionFunctions.sum_to_n_b(0)}`)
console.log(`sum_to_n_a(0) = ${solutionFunctions.sum_to_n_c(0)}`)


console.log("🚀 ~ Expect returns 0 for negative n ~ 🚀")
console.log(`sum_to_n_a(-1) = ${solutionFunctions.sum_to_n_a(-1)}`)
console.log(`sum_to_n_a(-1) = ${solutionFunctions.sum_to_n_b(-1)}`)
console.log(`sum_to_n_a(-1) = ${solutionFunctions.sum_to_n_c(-1)}`)

console.log("🚀 ~ Expect returns correct sum for small positive n ~ 🚀")
console.log(`sum_to_n_a(3) = ${solutionFunctions.sum_to_n_a(3)} => Expect result: 6`)
console.log(`sum_to_n_a(3) = ${solutionFunctions.sum_to_n_b(3)} => Expect result: 6`)
console.log(`sum_to_n_a(3) = ${solutionFunctions.sum_to_n_c(3)} => Expect result: 6`)

console.log(`sum_to_n_a(10) = ${solutionFunctions.sum_to_n_a(10)} => Expect result: 55`)
console.log(`sum_to_n_a(10) = ${solutionFunctions.sum_to_n_b(10)} => Expect result: 55`)
console.log(`sum_to_n_a(10) = ${solutionFunctions.sum_to_n_c(10)} => Expect result: 55`)