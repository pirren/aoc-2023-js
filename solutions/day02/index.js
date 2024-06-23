import { getLines } from '../../lib/utils.js';

const lines = getLines(import.meta.url);

export function partOne() {
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

export function partTwo() {
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
