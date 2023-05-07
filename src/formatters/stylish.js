import _ from 'lodash';

const getMargin = (depth, char = ' ') => char.repeat(depth * 4 - 2);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const indentSize = (depth + 1) * 4;
  const bracketIndent = ' '.repeat(depth * 4);
  const currentIndent = ' '.repeat(indentSize);
  const entries = Object.entries(value);
  const formattedEntries = entries.map(([key, val]) => `${currentIndent}${key}: ${stringify(val, depth + 1)}`);
  return `{\n${formattedEntries.join('\n')}\n${bracketIndent}}`;
};

const stylish = (diffTree) => {
  const iter = (node, depth = 1) => {
    const bracketIndent = ' '.repeat(depth * 4 - 4);
    const diff = node.flatMap((item) => {
      switch (item.type) {
        case 'nested':
          return `${getMargin(depth)}  ${item.key}: ${iter(item.children, depth + 1)}`;
        case 'unchanged':
          return `${getMargin(depth)}  ${item.key}: ${stringify(item.value, depth)}`;
        case 'added':
          return `${getMargin(depth)}+ ${item.key}: ${stringify(item.value, depth)}`;
        case 'deleted':
          return `${getMargin(depth)}- ${item.key}: ${stringify(item.value, depth)}`;
        case 'changed':
          return `${getMargin(depth)}- ${item.key}: ${stringify(item.oldValue, depth)}\n${getMargin(depth)}+ ${item.key}: ${stringify(item.newValue, depth)}`;
        default:
          throw new Error(`This ${item.type} is not supported`);
      }
    });
    return `{\n${diff.join('\n')}\n${bracketIndent}}`;
  };
  return iter(diffTree);
};

export default stylish;
