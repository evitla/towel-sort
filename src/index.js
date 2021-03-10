
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix)
    return [];

  return matrix.reduce((stack, array, index) => {
    stack = stack.concat(
      index % 2 == 0
        ? array.sort((a, b) => a - b)
        : array.sort((a, b) => b - a)
    )
    return stack;
  }, []);
}
