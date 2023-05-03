import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('check default compare', () => {
	expect(genDiff('__fixtures__/filepath1.json', '__fixtures__/filepath2.json')).toEqual(readFile('expectJson.txt'),);
});

test('check default compare yaml files', () => {
	expect(genDiff('__fixtures__/filepath1.yaml', '__fixtures__/filepath2.yaml')).toEqual(readFile('expectJson.txt'),);
	});