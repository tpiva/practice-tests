class MergeSort {

  static sort(array) {

    if (array.length <= 1) {
      return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle, array.length);
    
    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);
    
    console.log(leftSortedArray)
    console.log(rightSortedArray)
    return this._merge(leftSortedArray, rightSortedArray);
  }

  static _merge(leftArray, rightArray) {
    let sortedArray = [];
    
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] > rightArray[0]) {
        sortedArray.push(rightArray[0]);
        rightArray = rightArray.slice(1, rightArray.length);
      } else {
        sortedArray.push(leftArray[0]);
        leftArray = leftArray.slice(1, leftArray.length);
      }
    }

    if (leftArray.length > 0) {
      sortedArray = sortedArray.concat(leftArray);
    } else if (rightArray.length > 0) {
      sortedArray = sortedArray.concat(rightArray);
    }

    return sortedArray;
  }

}

const array = [4, 7, 2, 6, 4, 8, 1, 3]
console.log(MergeSort.sort(array))

