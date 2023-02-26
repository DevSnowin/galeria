export const fetcher = async () => {
	const API_ENDPOINT = 'https://api.unsplash.com';
	const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_1;

	const res = await fetch(
		`${API_ENDPOINT}/photos/random?client_id=${CLIENT_ID}&count=30`
	);
	const data = await res.json();
	return data;
};
