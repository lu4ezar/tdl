export const saveState = (list) => {
	console.log(list);
	console.log('save');
	localStorage.clear();
	try {
		const serializedState = JSON.stringify(list);
		localStorage.setItem('list', serializedState);
	} catch(err) {
		console.log('Can\'t save state to localStorage');
	}
}

export const loadState = () => {
	console.log('load');
	try {
		const serializedState = localStorage.getItem('list');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch(err) {
		return undefined;
	}
}