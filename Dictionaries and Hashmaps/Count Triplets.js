'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    let triplets = 0;
    const count = [];
    const pairs = [];

    for (let n = 0; n < arr.length; n++) {
        //first number value
        const i = arr[n];
        //first number divided by ratio
        const ir = i / r;   
        //if count of the current number value is not saved
        if (count[i] === undefined) {
            //set count of the current number value to zero
            count[i] = 0;
            //set pairs of the current number value to zero
            pairs[i] = 0;
        }
    //if the pairs array of the current number value divided by the ratio is defined
        if (pairs[ir]) {
            triplets += pairs[ir];
        }
    //if the count array of the current number value divided by the ratio is defined
        if (count[ir]) {
            pairs[i] += count[ir];
        }
        count[i]++;
    }
    return triplets;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}
