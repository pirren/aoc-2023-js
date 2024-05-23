import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname.slice(1), 'input.txt'); 
const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');

function partOne() {
    const max = { "red" : 12 , "green" : 13, "blue" : 14 };
    return lines.reduce((acc, line) => {
        let gameId = +line.split(':')[0].split(' ')[1];
        const toValidate = line.split(':')[1].split('; ').map(game => {
            return game.split(',').map(dice => {
                const color = dice.trim().split(' ')[1];
                const count = +dice.trim().split(' ')[0];
                return count <= max[color];
            }).every(dice => dice == true);
        });

        if (toValidate.every(game => game == true))
            acc += gameId;

        return acc;
    }, 0);
}

function partTwo() {
    return lines.reduce((acc, line) => {
        const seen = { "red" : 0 , "green" : 0, "blue" : 0 };
        line.split(':')[1].split('; ').forEach(game => {
            game.split(',').forEach(dice => {
                const color = dice.trim().split(' ')[1];
                const count = +dice.trim().split(' ')[0];

                seen[color] = Math.max(seen[color], count);
            });
        });

        return acc + seen["red"] * seen["green"] * seen["blue"];
    }, 0);
}

export { partOne };
export { partTwo };
