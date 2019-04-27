export const saveState = (state) => {
	try {
		const state = JSON.stringify(state);
		localStorage.setItem('state', state);
	} catch(err) {
		
	}
}

export const loadState = () => {
	try {
		const state = localStorage.getItem('state');
		if (state === null) {
			return undefined;
		}
		return JSON.parse(state);
	} catch(err) {
		return undefined;
	}
}