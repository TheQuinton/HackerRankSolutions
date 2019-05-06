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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumps = 0, //jumps -> count
        cloud = 0; //cloud -> current location

    while (true) { //keep try
        // check for double jump
        if (cloud + 2 < c.length && c[cloud + 2] === 0) {
            cloud += 2;
        } else if (cloud + 1 < c.length) { //single jump as ever level is winnable
            cloud++;
        } else { //break if no space in array
            break;
        }
        jumps++; //add one jump per pass
    }
    return jumps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
