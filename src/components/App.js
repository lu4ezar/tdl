import React from 'react';
import Form from '../containers/AddForm';
import VisibleList from '../containers/VisibleList';
import UndoRedo from '../containers/UndoRedo';
import Filter from '../containers/Filter';

const App = () => (
	<React.Fragment>
		<VisibleList />
		<Form />
		<UndoRedo />
		<Filter />
	</React.Fragment>
);

export default App;
