class Quicksort {

  static sort(array, left, right) {
    
    // if array size be equal 1
    if (left < right) {
      const indexPivo = this._partition(array, left, right);
      this.sort(array, left, indexPivo - 1); // sort until one item before pivo
      this.sort(array, indexPivo + 1, right); // sort since one item after pivo
    }

  }

  static _partition(array, left, right) {
    // get pivo as more right element of array
    let pivo = array[right];
    // keep track the start of array to know where put elements less than array on left.
    let start = left;

    for (let index = start; index < right; index++) {
      if (array[index] <= pivo) {
        const temp = array[index];
        array[index] = array[start];
        array[start] = temp;
        start++;
      }  
    }

    // put pivo into middle of lists [left less than pivo and right greater then pivo]
    array[right] = array[start]
    array[start] = pivo;
    return start;
  }

}
const array = [4, 7, 2, 6];
Quicksort.sort(array, 0, array.length - 1);
console.log(array)