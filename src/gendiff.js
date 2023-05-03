import path from 'path';
import fs from 'fs';
import generationFormat from '../formatters/index.js';
import buildTree from './buildTree.js';
import getParse from './getParse.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const [obj1, obj2] = [filepath1, filepath2]
    .map((fp) => getParse(fs.readFileSync(path.resolve(fp)), path.extname(fp)));
  const diffTree = buildTree(obj1, obj2);
  return generationFormat(diffTree, format);
};

export default gendiff;
