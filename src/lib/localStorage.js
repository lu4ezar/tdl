export const saveState = list => {
	try {
		const serializedState = JSON.stringify(list);
		localStorage.setItem('list', serializedState);
	} catch (err) {
		console.log("Can't save state to localStorage: ", err);
	}
};

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('list');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};
