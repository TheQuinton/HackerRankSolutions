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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    //[1,2,3,4,5]
    let chaos, db = false,
        bribes = 0;
    for (let i = 0; i < q.length; i++) {
        q[i] - (i + 1) > 2 ? chaos = true : false;
    }
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] !== i + 1) {
            if (q[i - 1] === i + 1 && (i - 1) >= 0) {
                bribes++;
                [q[i], q[i-1]] = [q[i-1], q[i]];
            } else if (q[i - 2] === i + 1 && (i - 2) >= 0) {
                bribes += 2;
                [q[i], q[i - 1], q[i - 2]] = [q[i - 2], q[i], q[i - 1]];
            }
        } 
        // if (q[i] !== (i + 1)) {
        //     let correct = q.findIndex(x => x === (i + 1));
        //     q[i] - correct === 2 ? db = true : bribes++;
        //     if (db) {
        //         let mid = q[i - 1];
        //         [q[i], q[mid], q[correct]] = [q[correct], q[i], q[mid]];
        //         bribes += 2;
        //         db = false;
        //     } else {
        //         [q[i], q[correct]] = [q[correct], q[i]];
        //     }
        // }
    }
    if (chaos) {
        console.log("Too chaotic");
    } else {
        console.log(bribes);
    }
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
