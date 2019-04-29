import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background: lightGreen;
	border: none;
	flex: 1 1 0;
	cursor: pointer;
	&.active {
		pointer-events: none;
		background: darkGreen;
		color: white;
	}
`;

const ButtonGroup = styled.div`
	background: magenta;
	display: flex;
	width: 30vw;
	border-radius: 5px;
	&.active {
		background: darkGreen;
	}
`;

const Filter = ({ filter, setFilter }) => {
	const onClick = e => {
		setFilter(e.target.value);
	};
	return (
		<ButtonGroup>
			<Button
				className={filter === 'SHOW_ALL' ? 'active' : ''}
				value='SHOW_ALL'
				onClick={onClick}
			>
				All
			</Button>
			<Button
				className={filter === 'SHOW_ACTIVE' ? 'active' : ''}
				value='SHOW_ACTIVE'
				onClick={onClick}
			>
				Active
			</Button>
			<Button
				className={filter === 'SHOW_COMPLETED' ? 'active' : ''}
				value='SHOW_COMPLETED'
				onClick={onClick}
			>
				Completed
			</Button>
		</ButtonGroup>
	);
};

export default Filter;
