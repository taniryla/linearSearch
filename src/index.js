function linear(array, value) {
  for (let idx of array) {
    if (array[idx] === value) {
      return idx;
    } else {
      return -1;
    }
  }
}
