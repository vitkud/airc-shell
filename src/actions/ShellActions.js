import API from 'classes/UshellApi.js';

import {
    ADD_SHELL_ERROR,
    SET_MODULES_MANIFEST,
    SELECT_SHELL_MODULE,
    SELECT_SHELL_VIEW,
    CHANGE_FRAME_PATH
} from './types';

export const addShellError = (message) => {
    return {
        type: ADD_SHELL_ERROR,
        payload: message
    };
};

export const loadManifest = () => {
    return (dispatch, getState) => {
        const state = getState();
        const { token, tokenValid } = state.shell;

        if (!token || !tokenValid) {
            dispatch({
                type: ADD_SHELL_ERROR,
                payload: "Auth Token is unvalid"
            });
        }

        API.loadManifest(token)
            .then((res) => {
                dispatch({
                    type: SET_MODULES_MANIFEST,
                    payload: res
                });
            })
            .catch((e) => {
                dispatch({
                    type: ADD_SHELL_ERROR,
                    payload: e.message
                });
            });
    };
}

export const selectModule = (id) => {
    return {
        type: SELECT_SHELL_MODULE,
        payload: id
    }
};

export const selectView = (code) => {
    return {
        type: SELECT_SHELL_VIEW,
        payload: code
    };
};

export const changeFrame = (path) => {
    return {
        type: CHANGE_FRAME_PATH,
        payload: path
    };
};