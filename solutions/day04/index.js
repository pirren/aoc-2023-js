import { getLines } from '../../lib/utils.js';

const lines = getLines(import.meta.url);

function toNumbers(values) {
    return values.split(' ').filter(x => x != '').map(x => parseInt(x.trim()));
}

function getDict() {
    return [...Array(lines.length).keys()].map(x => x = 1);
}

export function partOne() {
    return lines.map((x) => {
        const [winners, numbers] = x.split(':')[1].split('|').map(toNumbers);
        return winners.filter(x => numbers.includes(x));
    }).reduce((acc, numbers) => {
        return acc + numbers.reduce((acx, x) => {
            return acx === 0 ? 1 : acx <<= 1;
        }, 0);
    }, 0);
}

export function partTwo() {
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
