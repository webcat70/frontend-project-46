import _ from 'lodash';
import fs from 'fs';
import path from 'node:path';
import buildTree from './buildTree.js';
import parse from './parse.js';
import stylish from './stylish.js';

const getData = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf8');
const getTypeFile = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2) => {
	const data1 = parse(getData(filepath1), getTypeFile(filepath1));
	const data2 = parse(getData(filepath2), getTypeFile(filepath2));
	return stylish(buildTree(data1, data2));
};
export default genDiff;