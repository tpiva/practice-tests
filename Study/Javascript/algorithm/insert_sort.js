class InsertSort {

  static sort(array) {

    for (let index = 1; index < array.length; index++) {
      const element = array[index];
      
      let secondIndex = index - 1;
      while (secondIndex >= 0 && element < array[secondIndex]) {
        // change the element until its find his place
        array[secondIndex + 1] = array[secondIndex];
        secondIndex--;
      }

      // insert element into the correct place
      array[secondIndex + 1] = element;
    }

    return array;
  }
}

console.log(InsertSort.sort([1,4,2,6,5]))