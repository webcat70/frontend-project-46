

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getData = (fullPath) => fs.readFileSync(fullPath, 'utf-8');
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);