import API from 'classes/UshellApi.js';

import {
    SET_AUTH_TOKEN,
    ADD_SHELL_ERROR
} from 'actions/types';

export const checkAuthToken = (force = false) => {
    return (dispatch, getState) => {
        const state = getState();
        const { token, tokenExpired } = state.shell;

        if (token && tokenExpired) {
            const now = new Date().valueOf();

            if (now > tokenExpired) {
                const payload = {
                    tokenValid: false,
                    tokenExpired: null
                };

                if (force) {
                    payload.token = null;
                } 

                dispatch({
                    type: SET_AUTH_TOKEN,
                    payload
                });
            }
        } else {
            dispatch({
                type: SET_AUTH_TOKEN,
                payload: {
                    token: null,
                    tokenValid: false,
                    tokenExpired: null
                }
            });
        }
    };
};

export const doAuth = (login, password) => {
    return (dispatch) => {
        API.authorize(login, password)
            .then((res) => {
                dispatch({
                    type: SET_AUTH_TOKEN,
                    payload: {
                        token: res.auth_token,
                        tokenValid: true,
                        tokenExpired: (new Date()).valueOf() + res.lifetime
                    }
                });
            })
            .catch((e) => {
                dispatch({
                    type: ADD_SHELL_ERROR,
                    payload: e.message
                });
            });
    }
};

export const doLogout = () => {
    return {
        type: SET_AUTH_TOKEN,
        payload: {
            token: null,
            tokenValid: false
        }
    };
}