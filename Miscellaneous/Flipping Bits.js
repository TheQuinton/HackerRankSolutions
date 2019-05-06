'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the flippingBits function below.
function flippingBits(n) {
    let initialBin = n.toString(2).split(''); //convert initial number to binary
    let inverseBin = Array(32).fill(0);
    let dif = 32 - initialBin.length;
    if (dif !== 0) {
        for (let i = 0; i < dif; i++){
            initialBin.unshift('0');
        }
    }
    for (let i = 0; i < 32; i++) {
        if (initialBin[i] === '0') {
            inverseBin[i] = '1';
        } else {
            inverseBin[i] = '0';
        }
    }
    inverseBin = inverseBin.join('');
    return parseInt(inverseBin,2);
}    
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
