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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    //divide character total by string length to get amount of repeats needed
    let reps = parseInt(n / s.length);
    //count 'a' in the string, mulitply by the repeats
    let aCount = (s.split('a').length - 1) * reps;
    //count for incomplete repeats
    aCount += s.slice(0, n % s.length) //shorten string to incomplete length
        .split('') //turn string into array
        .filter(a => a === 'a') //filter array for 'a'
        .length; //count number of 'a'
    return aCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
