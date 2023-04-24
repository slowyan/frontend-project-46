import getParse from './getParse.js';
import readFile from './readFile.js';
import _ from 'lodash';
import path from 'path';

const gendiff = (filepath1, filepath2) => {
	const [obj1, obj2] = [filepath1, filepath2].map((fp) => getParse(readFile(fp), path.extname(fp)));
	const key1 = Object.keys(obj1);
	const key2 = Object.keys(obj2);
	const keys = _.union(key1, key2);
	const diff = [];
	for (const key of keys) {
		if (_.isEqual(obj1[key], obj2[key])) {
			diff.push({key, value: obj2[key], type: ' ', });
		} else  if (!Object.hasOwn(obj1, key)) {
			diff.push({key, value: obj2[key], type: '+', });
		} else if (!Object.hasOwn(obj2, key)) {
			diff.push({key, value: obj1[key], type: '-', });
		} else {
			diff.push({key, value: obj1[key], type: '-', });
			diff.push({key, value: obj2[key], type: '+', });
		}
	}
	
	const sortedDiff = _.sortBy(diff, 'key')
		.map((k) => `    ${k.type} ${k.key}: ${k.value}\n`);
	return `{\n${sortedDiff.join('')}}`;
};

export default gendiff;
