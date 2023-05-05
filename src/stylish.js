const stringify = (val, depth) => {
  if (!_.isObject(val)) {
    return val;
  }

  const keys = Object.keys(val);
  const currentDepth = (depth + 1) * 4;
  const result = keys.map((el) => {
    const currentValue = `${stringify(val[el], depth + 1)}`;
    return `${' '.repeat(currentDepth + 2)}  ${el}: ${currentValue}`;
  });

	return [`'{', ...result, ${ ' '.repeat(currentDepth) }}`].join('\n');
};

const stylish = (arr) => {
	const result = arr.map((elem) => {
		if (elem.type === 'added') {
			return `  + ${elem.key}: ${elem.value}`;
		}
		if (elem.type === 'deleted') {
			return `  - ${elem.key}: ${elem.value}`;
		}
		if (elem.type === 'changed') {
			return `  - ${elem.key}: ${elem.valueBefore}\n  + ${elem.key}: ${elem.valueAfter}`;
		}
		return `    ${elem.key}: ${elem.value}`;
	});
	return `{\n${result.join('\n')}\n}`;
};
export default stylish;
