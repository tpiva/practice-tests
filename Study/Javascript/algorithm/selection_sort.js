class SelectionSort {

  static sort(array) {

    for (let index = 0; index < array.length - 1; index++) {
      let minIndex = index;
      
      for (let innerIndex = index + 1; innerIndex < array.length; innerIndex++) {
        if (array[innerIndex] < array[minIndex]) {
          minIndex = innerIndex;
        }
      }

      if (minIndex !== index) {
        const temp = array[minIndex];
        array[minIndex] = array[index];
        array[index] = temp;
      }
    }

    return array;
  }
}

console.log(SelectionSort.sort([1,4,2,6,5]))