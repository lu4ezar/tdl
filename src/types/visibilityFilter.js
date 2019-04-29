// @flow
export type VisibilityFilter = string;

export type VisibilityFilterState = {
	+visibilityFilter: VisibilityFilter
};

export type FilterAction = {
	type: 'SET_VISIBILITY_FILTER',
	+filter: VisibilityFilter
}
