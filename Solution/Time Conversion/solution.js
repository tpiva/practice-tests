'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    if (s.endsWith('PM')) {
        const newS = s.replace('PM', '');
        const values = newS.split(':');
        const firstValue = parseInt(values[0], 10) === 12 ? parseInt(values[0], 10) : parseInt(values[0], 10) + 12;

        return `${firstValue === 24 ? '00' : firstValue.toString()}:${values[1]}:${values[2]}`
    } else {
        const newS = s.replace('AM', '');
        const values = newS.split(':');
        if (values[0] === '12') {
            const newValue = parseInt(values[0], 10) + 12;
            return `${newValue === 24 ? '00' : newValue.toString()}:${values[1]}:${values[2]}`
        }
        return newS;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
