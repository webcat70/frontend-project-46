const stylish = (arr) => {
	const result = arr.map((elem) => {
		if (elem.type === 'added') {
			return `  + ${ elem.key}: ${elem.value}`;
		}
		if (elem.type === 'deleted') {
			return `  - ${elem.key}: ${elem.value}`;
		}
		if (elem.type === 'changed') {
			return `  - ${elem.key}: ${elem.valueBefore} \n  + ${elem.key}: ${elem.valueAfter}`;
		}
		return `    ${elem.key}: ${elem.value}`;
	})
	return `{\n${result.join('\n')} \n}`;
};
export default stylish;
