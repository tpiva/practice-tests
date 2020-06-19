class Jumpsearch {

  static search(array, searchItem) {
    // calculate block size
    const size = array.length;
    const blockSize = Math.floor(Math.sqrt(size));

    let index = 0;
    let indexOfBlock = blockSize;

    // find which block the element exists
    while (searchItem >= array[indexOfBlock] && indexOfBlock < size) {
      index = indexOfBlock;
      indexOfBlock += blockSize;

      // exceed the array
      if (indexOfBlock > size) {
        // couldn't find the element on this array
        return -1;
      }
    }

    // for from beginning of block until end of block
    for (let idx = index; idx < indexOfBlock; idx++) {
      if (array[idx] === searchItem) {
        return idx;
      }
    }

    // couldn't find the element in array
    return -1;
  }
}

console.log(Jumpsearch.search([0, 1, 1, 2, 3, 5, 8, 13, 21, 55, 77, 89, 101, 201, 256, 780], 780));