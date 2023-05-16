import _ from 'lodash';

const stringify = (value) => {
	if (_.isPlainObject(value) && value !== null) return "[complex value]";
	if (typeof value === "string") {
		return `'${value}'`;
	}
	if (value === null) {
		return null;
	}
	return `${value}`;
};

const getPlain = (data) => {
	const iter = (tree, parent) =>
		tree
			.filter((node) => node.type !== "unchanged")
			.map((node) => {
				const property = parent ? `${parent}.${node.key}` : node.key;
				switch (node.type) {
					case "added":
						return `Property '${property}' was added with value: ${stringify(
							node.value
						)
							}`;
					case "deleted":
						return `Property '${property}' was removed`;
					case "changed":
						return `Property '${property}' was updated. From ${stringify(
							node.valueBefore
						)
							} to ${stringify(node.valueAfter)}`;
					case "nested":
						return `${iter(node.children, property)}`;
					default:
						throw new Error(`Type is not defined - ${node.type}`)
				}
			})
			.join("\n");
	return iter(data, 0);
};
export default getPlain;