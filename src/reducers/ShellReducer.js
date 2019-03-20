import * as Types from 'actions/types';

const INITIAL_STATE = {
    token: null,
    tokenValid: false,
    manifest: {},
    module: null,
    view: null,
    framePath: null
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case Types.SET_AUTH_TOKEN: 
            return {
                ...state,
                ...action.payload
            };

        case Types.SET_MODULES_MANIFEST: 
            return {
                ...state,
                manifest: action.payload
            }

        case Types.SELECT_SHELL_MODULE:
            return {
                ...state,
                module: action.payload
            };

        case Types.SELECT_SHELL_VIEW:
            console.log(`selection view "${action.payload}"`);
            return {
                ...state,
                view: action.payload

            };
        case Types.CHANGE_FRAME_PATH: 
            return {
                ...state,
                framePath: action.payload
            };
        default:
            return state;
    }
}