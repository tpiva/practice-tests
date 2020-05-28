function calculateHammingDistance(first, second) {
  let count = 0;

  for (let idx = 0; idx < first.length; idx++) {
    if (first.charAt(idx) !== second.charAt(idx)) {
      count++;
    }
  }

  return count;
} 

console.log(calculateHammingDistance('a', 'b'));
console.log(calculateHammingDistance('a', 'a'));
console.log(calculateHammingDistance('karolin', 'kathrin'));
console.log(calculateHammingDistance('2173896', '2233796'));