// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './redux/reducers/index';
import { loadState, saveState } from './lib/localStorage';
import { Provider } from 'react-redux';
import type { Store } from './types';
import 'normalize.css';
import './index.css';

const savedState = loadState();

const store: Store = createStore(
	reducer,
	savedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
	saveState(store.getState());
});

const root = document.getElementById('root');

if (root !== null) {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		root
	);
}
