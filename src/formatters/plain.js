import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
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
        return `Property '${path}${node.key}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`;
      default:
        throw new Error(`Unsupported node type: ${node.type}`);
    }
  };
  const diff = diffTree.flatMap((item) => iter(item)).join('\n');
  return diff;
};

export default plain;
