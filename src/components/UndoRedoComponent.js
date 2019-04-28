import React from 'react';

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
	<>
		<button onClick={onUndo} disabled={!canUndo}>
			Undo
		</button>
		<button onClick={onRedo} disabled={!canRedo}>
			Redo
		</button>
	</>
);

export default UndoRedo;
