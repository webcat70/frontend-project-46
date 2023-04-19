import _ from 'lodash';
import fs from 'fs';
import buildTree from './buildTree.js';
//import path from 'node:path';
import parse from './parse.js';
import plain from 'plain.js';

//const getData = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf8');
const getData = (fullPath) => fs.readFileSync(fullPath, 'utf-8');

const genDiff = (filepath1, filepath2) => {

	const data1 = parse(getData(filepath1));
	const data2 = parse(getData(filepath2));
	//return buildTree(data1, data2);
	return plain(buildTree(data1, data2));
};
export default genDiff;