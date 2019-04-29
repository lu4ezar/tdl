// @flow
import type { VisibilityFilter, FilterAction } from '../../types/visibilityFilter';

const visibilityFilter = (
	state: VisibilityFilter = 'SHOW_ALL',
	action: FilterAction
) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
};

export default visibilityFilter;
