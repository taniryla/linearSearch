function linearSearch(array, value) {
  for (let idx = 0; idx < array.length; i++) {
    if (array[idx] === value) {
      return idx;
    } else {
      return -1;
    }
  }
}
