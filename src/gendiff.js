import generationFormat from '../formatters/generationFormat.js';
import buildTree from './buildTree.js';
import getParse from './getParse.js';
import readFile from './readFile.js';
import path from 'path';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
	const [obj1, obj2] = [filepath1, filepath2].map((fp) => getParse(readFile(fp), path.extname(fp)));
	const diffTree = buildTree(obj1, obj2);
	return generationFormat(diffTree, format);
};

export default gendiff;
 