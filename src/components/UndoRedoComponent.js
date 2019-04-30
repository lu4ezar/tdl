import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ButtonContainer = styled.div`
	border: 1px solid darkGrey;
	border-radius: 5px 5px;
`;

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
	<ButtonContainer>
		<Button variant='contained' m={2} onClick={onUndo} bg='blue' disabled={!canUndo}>
			Undo
		</Button>
		<Button variant='contained' m={2} onClick={onRedo} disabled={!canRedo}>
			Redo
		</Button>
	</ButtonContainer>
);

export default UndoRedo;
