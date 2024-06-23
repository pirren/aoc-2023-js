import { getLines } from '../../lib/utils.js';

const lines = getLines(import.meta.url);

function valid(races) {
    return races.reduce((acc, race) => {
        let valid = 0;
        for (let i = 1; i < race.Time; i++) {
            if (i * (race.Time - i) > race.Distance) {
                valid++;
            }
        }
        return acc * valid;
    }, 1);
}

export function partOne() {
    const process = (obj, selector) => 
        obj.replace(selector, '').split(' ').filter(x => x).map(x => +x);

    let times = process(lines[0], 'Time:');
    let distances = process(lines[1], 'Distance:');

    let races = times.map((time, index) => ({ Time : time, Distance : distances[index] }));
    return valid(races);
}

export function partTwo() {
    let time = +lines[0].replace(/Time:/g, '').replace(/ /g, '');
    let distance = +lines[1].replace(/Distance:/g, '').replace(/ /g, '');
    return valid([{ Time : time, Distance : distance }]);
}
