// @flow
import type { TodosState, TodosAction } from './todos';
import type { VisibilityFilterState, FilterAction } from './visibilityFilter';
import type { Store as ReduxStore } from 'redux';

export type State = TodosState & VisibilityFilterState;

export type Action = TodosAction | FilterAction;

export type Store = ReduxStore<State, Action>