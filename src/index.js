import _ from 'lodash';
import fs from 'fs';
import path from 'node:path';
import buildTree from './buildTree.js';
//import parse from './parse.js';
import stylish from './stylish.js';

const getData = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf8');
const getFormat = (filepath) => filepath.extname(pathFile1).slice(1);

const genDiff = (filepath1, filepath2) => {
	const data1 = JSON.parse(getData(filepath1));
	const data2 = JSON.parse(getData(filepath2));
	return stylish(buildTree(data1, data2));
};
export default genDiff;