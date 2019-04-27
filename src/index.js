import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import todoApp from './redux/reducer';
// import { loadState, saveState } from '../localStorage';

// const savedState = loadState();
// const store = createStore(todoApp, saveState);
// store.subscribe(() => {
//   saveState(store.getState());
// });

ReactDOM.render(
  //<Provider store={store}>
    <App />,
  //</Provider>,
  document.getElementById('root')
);
