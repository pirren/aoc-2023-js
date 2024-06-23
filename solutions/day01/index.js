import { getLines } from '../../lib/utils.js';

const lines = getLines(import.meta.url);

export function partOne() {
    return lines.reduce((acc, line) => {
        let first = line.split('').find(n => !Number.isNaN(+n));
        let last = line.split('').reverse().find(n => !Number.isNaN(+n));
        return acc + Number(first + last);
    }, 0);
}

export function partTwo() {
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

// export { partOne };
// export { partTwo };
