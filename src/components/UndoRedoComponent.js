import React from 'react';
import Button from '@material-ui/core/Button';

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
	<div style={{ marginLeft: 'auto' }}>
		<Button m={2} onClick={onUndo} bg='blue' disabled={!canUndo}>
			Undo
		</Button>
		<Button m={2} onClick={onRedo} disabled={!canRedo}>
			Redo
		</Button>
	</div>
);

export default UndoRedo;
