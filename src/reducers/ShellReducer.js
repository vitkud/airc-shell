import * as Types from 'actions/types';

const INITIAL_STATE = {
    token: null,
    manifest: {}
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case Types.SET_AUTH_TOKEN: 
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
}