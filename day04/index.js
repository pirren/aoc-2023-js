import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname.slice(1), 'input.txt'); 
const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');

function toNumbers(values) {
    return values.split(' ').filter(x => x != '').map(x => parseInt(x.trim()));
}

function getDict() {
    return [...Array(lines.length).keys()].map(x => x = 1);
}

function partOne() {
    return lines.map((x) => {
        const [winners, numbers] = x.split(':')[1].split('|').map(toNumbers);
        return winners.filter(x => numbers.includes(x));
    }).reduce((acc, numbers) => {
        return acc + numbers.reduce((acx, x) => {
            return acx === 0 ? 1 : acx <<= 1;
        }, 0);
    }, 0);
}

function partTwo() {
    const dict = getDict();

    const numbers = lines.map((x, i) => {
        const [winners, numbers] = x.split(':')[1].split('|').map(toNumbers);
        return [i, winners.filter(x => numbers.includes(x))];
    });
    
    numbers.forEach(([i, numbers]) => {
        for (let j = i + 1; j <= i + numbers.length && j < dict.length; j++)  {
            dict[j] += dict[i]
        }
    });

    return dict.reduce((acc, x) => acc + x, 0);
}

export { partOne };
export { partTwo };
