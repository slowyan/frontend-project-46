import _ from 'lodash';
const stringify = (object) => {
	if (_.isObject(object)) {
		return '[complex value]';
	}
	if (typeof object === 'string') {
		return `'${object}'`;
	}
	return object;
};

const plain = (diffTree) => {
	const iter = (node, path = '') => {
		switch (node.type) {
		case 'nested':
			return node.children
				.flatMap((item) => iter(item, `${path}${node.key}.`));
		case 'unchanged':
			return [];
		case 'added':
			return `Property '${path}${node.key}' was added with value: ${stringify(node.value)}`;
		case 'deleted':
			return `Property '${path}${node.key}' was removed`;
		case 'changed':
			return `Property '${path}${node.key}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.value)}`;
		default:
			throw new Error(`Unsupported node type: ${node.type}`);
		}
	};
	const diff = diffTree.flatMap((item) => iter(item)).join('\n');
	return diff;
};

export default plain;