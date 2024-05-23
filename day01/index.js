import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname.slice(1), 'input.txt');
const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');

function partOne() {
    return lines.reduce((acc, line) => {
        let first = line.split('').find(n => !Number.isNaN(+n));
        let last = line.split('').reverse().find(n => !Number.isNaN(+n));
        return acc + Number(first + last);
    }, 0);
}

function partTwo() {
    const letters = {"one": "on1e", "two": "tw2o", "three": "thr3ee", "four": "fo4ur", "five": 
    "fi5ve", "six": "si6x", "seven": "se7ven", "eight": "ei8ght", "nine": "ni9ne" };

    return lines.reduce((acc, line) => {
        Object.keys(letters).forEach(key => {
            const value = letters[key];
            line = line.replace(key, value);
        });

        let first = line.split('').find(n => !Number.isNaN(+n));
        let last = line.split('').reverse().find(n => !Number.isNaN(+n));
        return acc + Number(first + last);
    }, 1);
}

export { partOne };
export { partTwo };
