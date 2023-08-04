const BASE = 'https://discord-bot-acb7.onrender.com';

const getUrl = async () => {
	try {
		const res = await fetch(`${BASE}/getId`);
		const json = await res.json();
		const { checkId } = json;

		const recRes = await fetch(`${BASE}/update/${checkId}`, { method: 'post' });
		const recJson = await recRes.json();
		console.log(recJson);
		const { url } = recJson;
		console.log(`url: ${url}, checkId: ${checkId}`);

		return { url, checkId };
	}
	catch (err) {
		console.log(`err: ${err}`);
	}
};

module.exports = {
	getUrl,
};