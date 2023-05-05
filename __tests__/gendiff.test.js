import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import gendiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe.each([
  ['stylish', 'expectedStylish.txt'],
  ['plain', 'expectedPlain.txt'],
  ['json', 'expectedJson.txt'],
])('gendiff formatter: %s', (formatter, expectedFilename) => {
  const expected = readFile(expectedFilename);

  test.each([
    ['json', 'file1.json', 'file2.json'],
    ['yml', 'file1.yml', 'file2.yml'],
  ])('input format: %s', (inputExt, file1, file2) => {
    const filepath1 = getFixturePath(file1);
    const filepath2 = getFixturePath(file2);
    const actual = gendiff(filepath1, filepath2, formatter);
    expect(actual).toEqual(expected);
  });
});
