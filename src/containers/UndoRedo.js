import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import UndoRedoComponent from '../components/UndoRedoComponent';

const mapStateToProps = state => ({
	canUndo: state.todos.past.length > 0,
	canRedo: state.todos.future.length > 0
});

const mapDispatchToProps = dispatch => ({
	onUndo: () => dispatch(UndoActionCreators.undo()),
	onRedo: () => dispatch(UndoActionCreators.redo())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UndoRedoComponent);
