import stylish from "./stylish.js";
import getPlain from "./plain.js";
import jsonFormat from "./json.js";

const makeFormater = (data, format) => {
	switch (format) {
		case 'plain':
			return getPlain(data);
		case 'json':
			return jsonFormat(data);
		case 'stylish':
			return stylish(data);
		default:
			throw new Error(`output format ${format} not found`);
	}
};
export default makeFormater;