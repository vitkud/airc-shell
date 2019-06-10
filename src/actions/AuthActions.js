import API from 'classes/UshellApi.js';

import {
    SET_AUTH_TOKEN,
    SHOW_AUTH_MODAL,
    HIDE_AUTH_MODAL,
    SHOW_FORGOT_MODAL,
    HIDE_FORGOT_MODAL,
    DO_LOGOUT
} from 'actions/types';

import {
    addShellErrorNotify,
    addShellSuccessNotify
} from './NotifyActions'

export const checkAuthToken = (force = false) => {
    return (dispatch, getState) => {
        const state = getState();
        const { token, tokenExpired } = state.shell;

        if (token && tokenExpired) {
            const now = new Date().valueOf();

            if (now > tokenExpired) {
                const payload = {
                    tokenValid: false
                };

                if (force) {
                    payload.tokenExpired = null;
                    payload.token = null;

                    dispatch({
                        type: SET_AUTH_TOKEN,
                        payload
                    });
                } else {
                    dispatch(showAuthModal()); 
                }
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
                dispatch(addShellSuccessNotify('Authorization complete'));

                const expDate = new Date().valueOf() + res.lifetime;

                dispatch({
                    type: SET_AUTH_TOKEN,
                    payload: {
                        token: res.auth_token,
                        tokenValid: true,
                        tokenExpired: expDate
                    }
                });
            })
            .catch((e) => {
                let text = '';

                if (e.error) {
                    text = e.error.message;
                } else {
                    text = e.toString();
                }
                
                dispatch(addShellErrorNotify(text));
            });
    }
};

export const doLogout = () => {
    return {
        type: DO_LOGOUT
    };
}

export const showAuthModal = () => {
    return {
        type: SHOW_AUTH_MODAL
    };
};

export const hideAuthModal = () => {
    return {
        type: HIDE_AUTH_MODAL
    };
};

export const showForgotModal = () => {
    return {
        type: SHOW_FORGOT_MODAL
    };
};

export const hideForgotModal = () => {
    return {
        type: HIDE_FORGOT_MODAL
    };
};