import { combineReducers } from 'redux';

import ShellReducer from './ShellReducer';

export default combineReducers({
    shell: ShellReducer,
});