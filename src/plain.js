const plain = (arr) => {
	const result = arr.map((elem) => {
		if (elem.type === 'added') {
			return `+ ${elem.key}: ${value}`;
		}
		if (elem.type === 'deleted') {
			return `- ${elem.key}: ${value}`;
		}
		if (elem.type === 'changed') {
			return `- ${elem.key}: ${valueBefore} \n + ${elem.key}: ${valueAfter}`;
		}
		return `${elem.key}: ${value}`;
	})
	return result.join('\n')
};
export default plain;
