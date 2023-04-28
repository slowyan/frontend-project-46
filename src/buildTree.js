import _ from 'lodash';

const buildTree = (obj1, obj2) => {
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	const unionKeys = _.union(keys1, keys2);
	const diff = unionKeys.map((key)=> {
		if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
			return { key, type: 'nested', children: buildTree(obj1[key], obj2[key]) };
		} else if (!Object.hasOwn(obj1, key)) {
			return { key, value: obj2[key], type: 'added' };
		} else if (!Object.hasOwn(obj2, key)) {
			return { key, value: obj1[key], type: 'deleted' };
		} else if (obj1[key] !== obj2[key]) {
			return {
				key,
				oldValue: obj1[key],
				value: obj2[key],
				type: 'changed'
			};
		}
		return { key, value: obj2[key], type: 'unchanged' };
	});
	return _.sortBy(diff, (item) => item.key);
};

export default buildTree;