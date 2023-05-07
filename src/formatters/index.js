import plain from './plain.js';
import stylish from './stylish.js';

const format = (diffTree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(diffTree);
    case 'plain':
      return plain(diffTree);
    case 'json':
      return JSON.stringify(diffTree, null, 4);
    default:
      throw new Error(`Format ${formatName} is not supported`);
  }
};

export default format;
