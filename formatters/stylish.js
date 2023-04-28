const stylish = (diffTree) => {
	const iter = (node, depth = 1) => {
		if (typeof node !== 'object' || node === null) {
			return `${node}`;
		}
		const indentSize = depth * 4 - 2;
		const currentIndent = ' '.repeat(indentSize);
		const bracketIndent = ' '.repeat(depth * 4 - 4);
		const diff = node.flatMap((item) => {
			switch(item.type) {
			case 'nested':
				return `${currentIndent}  ${item.key}: ${iter(item.children, depth + 1)}`;
			case 'unchanged':
				return `${currentIndent}  ${item.key}: ${stringify(item.value, depth)}`;
			case 'added':
				return `${currentIndent}+ ${item.key}: ${stringify(item.value, depth)}`;
			case 'deleted':
				return `${currentIndent}- ${item.key}: ${stringify(item.value, depth)}`;
			case 'changed':
				return `${currentIndent}- ${item.key}: ${stringify(item.oldValue, depth)}\n${currentIndent}+ ${item.key}: ${stringify(item.value, depth)}`;
			default:
				throw new Error(`This ${item.type} is not supported`);
			}
		});
		return `{\n${diff.join('\n')}\n${bracketIndent}}`;
	};
    
	const isObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
    
	const stringify = (value, depth) => {
		if (!isObject(value)) {
			return `${value}`;
		}
		const indentSize = (depth + 1) * 4;
		const bracketIndent = ' '.repeat(depth * 4);
		const currentIndent = ' '.repeat(indentSize);
		const entries = Object.entries(value);
		const formattedEntries = entries.map(([key, value]) => `${currentIndent}${key}: ${stringify(value, depth + 1)}`);
		return `{\n${formattedEntries.join('\n')}\n${bracketIndent}}`;
	};
    
	return iter(diffTree);
};

export default stylish;
