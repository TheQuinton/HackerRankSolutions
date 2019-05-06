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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let arr = Array(n).fill(0),
        max = 0;

    queries.forEach((query) => {
        arr[query[0] - 1] += query[2];
        if (query[1] < arr.length) {
            arr[query[1]] -= query[2];
        }
    });
    arr.reduce((a, b) => {
        (a + b) > max ? max = (a + b) : false;
        return (a + b);
    },0);
    
    // for (let query of queries) {
    //     arr = arr.map((val, index) => {
    //         if ((query[0] - 1) <= index && index <= (query[1] - 1)) {
    //             val += query[2];
    //             val > max ? max = val : max;
    //             return val;
    //         } else {
    //             return val;
    //         }
    //     });
    // }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
