
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) return []

  return [].concat(...matrix.map((item, i) => {
    return (i % 2 == 0) ? item : item.reverse()
  }))
}
