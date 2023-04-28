import stylish from './stylish.js';

const generationFormat = (tree, format) => {
	switch (format) {
	case 'stylish':
		return stylish(tree);
	case 'json':
		return JSON.stringify(tree);
	default:
		throw new Error(`Format ${format} is not supported`);
	}
};

export default generationFormat;
