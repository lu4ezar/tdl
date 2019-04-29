import React from 'react';
import styled from 'styled-components';
import { Button } from 'rebass';
import Paper from '@material-ui/core/Paper';

const SuperButton = styled(Button)`
	background: lightBlue;
	border: none;
	flex: 1 1 0;
	cursor: pointer;
	color: black;
	margin: 1em;
	border: 1px solid black;
	&.active {
		pointer-events: none;
		background: #0e2447;
		color: white;
	}
`;

const Container = styled(Paper)`
	display: flex;
	width: 50%;
`;

const Filter = ({ filter, setFilter }) => {
	const onClick = e => {
		setFilter(e.target.value);
	};
	return (
		<Container>
			<SuperButton
				className={filter === 'SHOW_ALL' ? 'active' : ''}
				value='SHOW_ALL'
				onClick={onClick}
			>
				All
			</SuperButton>
			<SuperButton
				className={filter === 'SHOW_ACTIVE' ? 'active' : ''}
				value='SHOW_ACTIVE'
				onClick={onClick}
			>
				Active
			</SuperButton>
			<SuperButton
				className={filter === 'SHOW_COMPLETED' ? 'active' : ''}
				value='SHOW_COMPLETED'
				onClick={onClick}
			>
				Completed
			</SuperButton>
		</Container>
	);
};

export default Filter;
