import { fileURLToPath } from 'url';
import { dirname } from 'path';
import gendiff from '../src/gendiff.js';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff json nested', () => {
	const expected = readFile('expected.txt');
	const json1 = getFixturePath('file1.json');
	const json2 = getFixturePath('file2.json');
	const actual = gendiff(json1, json2);
	expect(actual).toEqual(expected);
});

test('gendiff yaml nested', () => {
	const expected = readFile('expected.txt');
	const yml1 = getFixturePath('file1.yml');
	const yml2 = getFixturePath('file2.yml');
	const actual = gendiff(yml1, yml2);
	expect(actual).toEqual(expected);
});
