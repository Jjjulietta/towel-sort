
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if(matrix === undefined) {arr = []} else {
  for(let i = 0; i < matrix.length; i++) {
  if(i == 0 || i%2 == 0) {arr.push(...matrix[i])} else{arr.push(...(matrix[i].reverse()))}}}
  return arr;
}
