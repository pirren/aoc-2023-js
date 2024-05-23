import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname.slice(1), 'input.txt'); 
const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');

function partOne() {
    console.log('test')
}

function partTwo() {
    
}

console.log(partOne());

export { partOne };
export { partTwo };
