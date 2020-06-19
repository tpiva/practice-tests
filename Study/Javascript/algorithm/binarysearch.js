class Binarysearch {

  static search(array, searchItem) {
    // calculate middle
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
      // sum start, because we need to know the index of middle element in the new array
      let middle = start + Math.floor((end - start) / 2);

      if (array[middle] === searchItem) {
        return middle;
      } else if (array[middle] > searchItem) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return -1;
  }

    static searchRecursive(array, searchItem, start, end) {
    if (start <= end) {
      let middle = start + Math.floor((end - start) / 2);
      
      if (array[middle] === searchItem) {
        return middle;
      }
      
      if (array[middle] > searchItem) {
        return this.searchRecursive(array, searchItem, start, middle - 1);
      } else {
        return this.searchRecursive(array, searchItem, middle + 1, end);
      }
    } else {
      return -1;
    }
  }
}

console.log(Binarysearch.search([1, 5, 10, 12, 14, 17, 22, 100], 17));
console.log(Binarysearch.searchRecursive([1, 5, 10, 12, 14, 17, 22, 100], 17, 0, 7));