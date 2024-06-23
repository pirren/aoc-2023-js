import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function getLines(callerURL, filename = 'input.txt') {
    const __filename = fileURLToPath(callerURL);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, filename);
    const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');
    return lines;
}