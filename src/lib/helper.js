import { saveAs } from 'file-saver';

export const downloadPhoto = async (url) => {
	try {
		saveAs(url, `galeria-${Date.now()}`);
	} catch (e) {
		console.log(e);
	}
};
