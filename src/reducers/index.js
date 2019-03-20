import { combineReducers } from 'redux';

import ShellReducer from './ShellReducer';
import NotificationReducer from './NotificationReducer';

export default combineReducers({
    shell: ShellReducer,
    notify: NotificationReducer
});