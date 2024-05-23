import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname.slice(1), 'input.txt'); 
const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');

function partOne() {
    return lines.reduce((acc, line) => {
        const isCellValid = (x, y) => 
            y >= 0 && y < lines.length && x >= 0 && x < lines[0].length && Number.isNaN(+lines[y][x]) && lines[y][x] != '.';

        const pattern = /\b\d+\b/g;
        let match;
        while ((match = pattern.exec(line)) !== null) {
            const number = match[0];
            let valid = false;

            for (let y = lines.indexOf(line) - 1; y <= lines.indexOf(line) + 1; y++) {
                for (let x = match.index - 1; x <= match.index + number.length; x++) {
                    if (isCellValid(x, y)) {
                        valid = true;
                        acc += +number;
                        break;
                    }
                }   
                if (valid) break;
            }
        }

        return acc;
    }, 0);
}

function partTwo() {
    // Scan once for numbers
    const numbers = lines.reduce((acc, line) => {
        let match;
        const pattern = /\b\d+\b/g;
        while ((match = pattern.exec(line)) !== null) {
            acc.push({
                N : match[0],
                X1 : match.index,
                X2 : match.index + match[0].length - 1,
                Y : lines.indexOf(line)
            });
        }
        return acc;
    }, []);    

    // Scan for gear symbols '*'
    return lines.reduce((acc, line) => {
        let y = lines.indexOf(line);
        for (var x = 0; x < line.length; x++) {
            if (line[x] != '*') continue;
            
            const matches = new Set();
            for (let r = y - 1; r <= y + 1; r++) {
                for (let c = x - 1; c <= x + 1; c++) {
                    let number = numbers.find(num => num.X1 <= c && c <= num.X2 && r == num.Y);
                    if (number) matches.add(number);
                }
            }
            
            const seen = [...matches];
            if (seen.length == 2) acc.push(seen[0].N * seen[1].N);
            
        }
        return acc; 
    }, []).reduce((a,b) => a + b, 0);
}

export { partOne };
export { partTwo };
