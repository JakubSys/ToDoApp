import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todo from './todo/Todo';

export default combineReducers({
    routing: routerReducer,
    todo
})