import _ from 'lodash';

import OrderedObject from 'classes/OrderedObject';

import {
    ADD_SHELL_ERROR,
    ADD_SHELL_WARNING,
    ADD_SHELL_NOTIFICATION
} from 'actions/types';

import * as Types from 'const/Notifications';

const INITIAL_STATE = {
    notifications: new OrderedObject(),
    last: null
};

export default (state = INITIAL_STATE, action) => {
    let newId = null;
    let newItem = null;
    let type = null;

    switch (action.type) {
        case ADD_SHELL_ERROR: 
            type = Types.ERROR;
            break;
        case ADD_SHELL_WARNING: 
            type = Types.WARNING;
            break;
        case ADD_SHELL_NOTIFICATION: 
            type = Types.NOTIFICATION;
            break;     
        default: 
            return state;
    }

    if (action.payload) {
        newId = _.uniqueId();

        newItem = {
            message: action.payload,
            timestamp: new Date().valueOf(),
            type: type,
            id: newId
        };

        state.notifications.add(newId, newItem);
    }

    return {
        ...state,
        last: newId
    };
};
