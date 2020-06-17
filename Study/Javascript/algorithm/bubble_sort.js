function bubbleSort(array) {
  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length -1; index2++) {
      if (array[index2] > array[index2 + 1]) {
        let temp = array[index2];
        array[index2] = array[index2 + 1];
        array[index2 + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort([3, 1, 5, 6, 2, 8]));