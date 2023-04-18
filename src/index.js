import _ from 'lodash';

const getData = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf8');

const genDiff = (filepath1, filepath2) => {

	const data1 = getData(filepath1);
  const data2 = getData(filepath2);
	const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
	console.log(keys)

	const result = keys.map((key) => {
		if (!_.has(filepath1[key]) && _.has(filepath2[key])) {
			return { key, type: 'added', value: filepath2[key] };
		}
		if (_.has(filepath1[key]) && !_.has(filepath2[key])) {
			return { key, type: 'deleted', value: filepath1[key] };
		}
		// if (_.has(file1[key]) && _.has(file2[key])) {
		// 	return {key, type: '', value}
		// }
		if (filepath1[key] !== filepath2[key]) {
			return { key, type: 'changed', valueBefore: filepath1[key], valueAfter: filepath2[key] };
		}
		return { key, type: 'unchanged', value: filepath1[key] };
	});
	return result;
};

export default genDiff;