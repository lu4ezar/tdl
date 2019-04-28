import React from 'react';
import Form from '../containers/AddForm';
import VisibleList from '../containers/VisibleList';
import UndoRedo from '../containers/UndoRedo';

const App = () => (
	<React.Fragment>
		<VisibleList />
		<Form />
		<UndoRedo />
	</React.Fragment>
);

export default App;
