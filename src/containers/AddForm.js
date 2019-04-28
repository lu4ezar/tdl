import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import Form from '../components/Form';

const getUniqueId = todos => {
	const idArray = todos.map(({ id }) => id);
	for (let i = 0; i < idArray.length; i++) {
		if (!idArray.includes(i)) {
			return i;
		}
	}
	return idArray.length;
};

const mapStateToProps = state => ({
	todos: state.todos.present,
	id: getUniqueId(state.todos.present)
});

export default connect(
	mapStateToProps,
	{ addTodo }
)(Form);
