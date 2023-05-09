import _ from 'lodash';

const currentIndent = (depth, intend = 4) => ' '.repeat(intend * depth - 2);

const stringify = (someEntity, spaceCount) => {
  const iter = (current, depth) => {
    if (!_.isObject(current)) {
      return current;
    }
    const lines = Object.entries(current).map(
      ([key, value]) => `${currentIndent(depth + 1)}  ${key}: ${iter(value, depth + 1)}`,
    );
    return [`'{', ...lines, ${currentIndent(depth)}  }`].join('\n');
  };
  return iter(someEntity, spaceCount);
};

const stylish = (data) => {
  const iter = (tree, depth) => tree.map((node) => {
    switch (node.type) {
      case 'added':
        return `${currentIndent(depth)} + ${node.key}: ${stringify(
          node.value,
          depth,
        )}\n`;
      case 'deleted':
        return `${currentIndent(depth)}- ${node.key}: ${stringify(
          node.value,
          depth,
        )}\n`;
      case 'unchanged':
        return `${currentIndent(depth)}  ${node.key}: ${stringify(
          node.value,
          depth,
        )}\n`;
      case 'changed':
        return `${currentIndent(depth)}- ${node.key}: ${stringify(
          node.valueBefore,
          depth,
        )}\n${currentIndent(depth)}+ ${node.key}: ${stringify(
          node.valueAfter,
          depth,
        )}\n`;
      case 'nested':
        return `${currentIndent(depth)}  ${node.key}: {\n${iter(
          node.children,
          depth + 1,
        ).join('')}${currentIndent(depth)}  }\n`;
      default:
        throw new Error(`Type is not defined - ${node.type}`);
    }
  });
  return `{\n${iter(data, 1).join('')}}`;
};
export default stylish;