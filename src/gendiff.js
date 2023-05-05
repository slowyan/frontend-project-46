import path from 'path';
import fs from 'fs';
import generationFormat from './formatters/index.js';
import buildTree from './buildTree.js';
import parse from './parse.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const content1 = fs.readFileSync(filepath1);
  const content2 = fs.readFileSync(filepath2);
  const obj1 = parse(content1, path.extname(filepath1).slice(1));
  const obj2 = parse(content2, path.extname(filepath2).slice(1));
  const diffTree = buildTree(obj1, obj2);
  return generationFormat(diffTree, format);
};

export default gendiff;
