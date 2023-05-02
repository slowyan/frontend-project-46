import { fileURLToPath } from 'url';
import { dirname } from 'path';
import gendiff from '../src/gendiff.js';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


const expectedStylish = readFile('expectedStylish.txt');
const expectedPlain = readFile('expectedPlain.txt');
const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');
const yml1 = getFixturePath('file1.yml');
const yml2 = getFixturePath('file2.yml');

test('json stylish', () => {
	const actual = gendiff(json1, json2);
	expect(actual).toEqual(expectedStylish);
});

test('yaml stylish', () => {
	const actual = gendiff(yml1, yml2);
	expect(actual).toEqual(expectedStylish);
});

test('json plain', () => {
	const actual = gendiff(json1, json2, 'plain');
	expect(actual).toEqual(expectedPlain);
});

test('yaml plain', () => {
	const actual = gendiff(yml1, yml2, 'plain');
	expect(actual).toEqual(expectedPlain);
});