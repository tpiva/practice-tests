function fibonacciNumber(size) {
  const sequence = [0, 1];

  for (let idx = 0; idx < size; idx++) {
    const sum = sequence.slice(sequence.length - 2, sequence.length).reduce((acc, val) => acc + val);
    sequence.push(sum);
  }

  return sequence;
}

console.log(fibonacciNumber(5));
console.log(fibonacciNumber(10));
console.log(fibonacciNumber(20));