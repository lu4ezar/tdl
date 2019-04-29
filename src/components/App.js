import React from 'react';
import Form from '../containers/AddForm';
import VisibleList from '../containers/VisibleList';
import UndoRedo from '../containers/UndoRedo';
import Filter from '../containers/Filter';
import { Flex, Heading } from 'rebass';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const OuterFlex = styled(Flex)`
	height: auto;
	min-width: 40%;
	justify-content: center;
	align-items: center;
`;

const StyledFlex = styled(Paper)`
	display: flex;
	background: #c8daf7;
	align-items: center;
	justify-content: space-between;
	padding: 3px;
	width: 50%;
	margin-top: 1em;
	margin-bottom: 1em;
`;

const App = () => (
	<OuterFlex
		flexDirection='column'
		height='80%'
		alignItems='right'
	>
		<Heading
			color='#cccccc'
			fontSize={5}
			fontWeight='bold'
			textAlign='right'
		>
			To-do App
		</Heading>
		<VisibleList />
		<StyledFlex>
			<Form />
			<UndoRedo />
		</StyledFlex>
		<Filter />
	</OuterFlex>
);

export default App;
