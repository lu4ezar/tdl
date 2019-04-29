import { connect } from 'react-redux';
import { setVisibilityFilter } from '../redux/actions';
import Filter from '../components/Filter';

const mapStateToProps = state => ({
	filter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
	setFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter);
