import path from 'path';
import fs from 'fs';
import buildTree from './buildTree.js';
import parse from './parse.js';
import format from './formatters/index.js';

const getFileData = (filepath) => {
  const content = fs.readFileSync(filepath);
  const parsedContent = parse(content, path.extname(filepath).slice(1));
  return parsedContent;
};

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getFileData(filepath1);
  const data2 = getFileData(filepath2);
  const diffTree = buildTree(data1, data2);
  return format(diffTree, formatName);
};

export default gendiff;
