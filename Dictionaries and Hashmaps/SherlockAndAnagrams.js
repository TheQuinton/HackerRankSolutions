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

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    //get string abcba
    //calculate total anagrams [[0],[4]] [[0,1],[3,4]]
    const len = s.length; //store string length
    s = s.split(''); //turn string into array
    let count = 0; //count of matches
    let map = new Map(); //stores anagrams, and amount of each
    //loop through the length of the string
    for (let i = 0; i < len; i++) {
        //loop through the remainder of the string
        for (let j = i; j < len; j++) {
            //single character pass, i===j, then pull that value only, 
            //otherwise take the character from i to j
            let substr = i === j ? s[i] : s.slice(i, j + 1).sort().join('');
            //value is the amount of each anagram
            //if the map has the anagram, value gets set to the amount found so far
            //otherwise set value at zero
            let value = map.has(substr) ? map.get(substr) : 0;
            //increment the value of the anagram
            map.set(substr, ++value);
        }
    }
    //loop through the stored substrings and values
    console.log(map);
    for (let [substr, value] of map.entries()) {
        //count the number of matches
        count += Math.floor((value - 1) * value / 2)
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}
