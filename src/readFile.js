import fs from 'fs';
import path from 'path';

const readFile = (filepath) => {
	const abspath = path.resolve(filepath);
	const file = fs.readFileSync(abspath);
	return file;
};

export default readFile;