import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname.slice(1), 'input.txt'); 
const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');

function valid(races) {
    return races.reduce((acc, race) => {
        let valid = 0;
        for (let i = 1; i < race.Time; i++) 
            if (i * (race.Time - i) > race.Distance)
                valid++;
        acc.push(valid)
        return acc;
    }, []).reduce((acc, valid) => acc * valid, 1)
}

function partOne() {
    let times = lines[0].replace('Time:', '').split(' ').filter(x => x).map(x => +x);
    let distances = lines[1].replace('Distance:', '').split(' ').filter(x => x).map(x => +x);

    let races = times.map((time, index) => ({ Time : time, Distance : distances[index] }));
    return valid(races);
}

function partTwo() {
    let time = +lines[0].replace(/Time:/g, '').replace(/ /g, '');
    let distance = +lines[1].replace(/Distance:/g, '').replace(/ /g, '');
    return valid([{ Time : time, Distance : distance }]);
}

console.log(partTwo());

export { partOne };
export { partTwo };
