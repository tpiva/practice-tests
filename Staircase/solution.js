'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    const stairArray = [];
    let myLine = '';
    for (let i = 0; i < n; i++) {
        myLine = myLine + "#";
    }
    stairArray.push(myLine);
    for (let i = (n - 1); i > 0; i--) {
        let newLine = myLine.substring(0, i);
        let numSpaces = (n - i);
        let space = '';
        while (numSpaces > 0) {
            space = space.concat(' ');
            numSpaces--;
        }
        stairArray.push(space.concat(newLine));
    }

    // console.log(stairArray.pop())
    // console.log(stairArray.pop())
    let elem = stairArray.pop();
    while (elem) {
        console.log(elem);
        elem = stairArray.pop();
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
