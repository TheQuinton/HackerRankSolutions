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

// Complete the freqQuery function below.
const freqQuery = queries => {
    const arr = [];
    const freq = [];
    const result = [];

    for (let i = 0; i < queries.length; i++) {
        const [action, value] = queries[i];
        const initialFreq = (arr[value] || 0);

        if (action === 1) {
            arr[value] = initialFreq + 1;
            freq[initialFreq] = (freq[initialFreq] || 0) - 1;
            freq[initialFreq + 1] = (freq[initialFreq + 1] || 0) + 1;
        }
        if (action === 2 && arr[value]) {
            arr[value] = initialFreq - 1;
            freq[initialFreq - 1]++;
            freq[initialFreq]--;
        }
        if (action === 3) {
            result.push(freq[value] > 0 ? 1 : 0);
        }
    }
    return result;
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}
