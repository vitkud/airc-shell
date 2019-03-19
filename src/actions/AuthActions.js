import API from 'classes/UshellApi.js';

import {
    SET_AUTH_TOKEN,
    ADD_SHELL_ERROR
} from 'actions/';

export const checkAuthToken = (token) => {
    return (dispatch) => {
        API.checkToken(token)
            .then((res) => {
                dispatch({
                    type: SET_AUTH_TOKEN,
                    payload: {
                        tokenValid: res
                    }
                });
            })
            .catch(() => {
                dispatch({
                    type: SET_AUTH_TOKEN,
                    payload: {
                        token: null,
                        tokenValid: false
                    }
                });
            });
    };
};

export const doAuthorication = (login, password) => {
    return (dispatch) => {
        API.authorize()
            .then((res) => {
                dispatch({
                    type: SET_AUTH_TOKEN,
                    payload: {
                        token: res.auth_token,
                        tokenValid: true
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