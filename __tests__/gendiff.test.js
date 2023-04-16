import { fileURLToPath } from 'url';
import { dirname } from 'path';
import gendiff from '../src/gendiff.js';
import fs from 'fs';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expected1 = readFile('expected.txt');
const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');

test('plain gendiff', () => {
    const actual = gendiff(file1, file2);
    expect(actual).toEqual(expected1);
});
