import _ from 'lodash';

const genDiff = (file1, file2) => {
	const keys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));
	console.log(keys)

	const result = keys.map((key) => {
		if (!_.has(file1[key]) && _.has(file2[key])) {
			return { key, type: 'added', value: file2[key] };
		}
		if (_.has(file1[key]) && !_.has(file2[key])) {
			return { key, type: 'deleted', value: file1[key] };
		}
		// if (_.has(file1[key]) && _.has(file2[key])) {
		// 	return {key, type: '', value}
		// }
		if (file1[key] !== file2[key]) {
			return { key, type: 'changed', valueBefore: file1[key], valueAfter: file2[key] };
		}
		return { key, type: 'unchanged', value: file1[key] };
	});
	return result;
};
genDiff(filepath1, filepath2)
export default genDiff;