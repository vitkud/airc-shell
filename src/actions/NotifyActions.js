import {
    ADD_SHELL_ERROR,
    ADD_SHELL_WARNING,
    ADD_SHELL_NOTIFICATION
} from './types';

export const addShellError = (mess) => {
    return {
        type: ADD_SHELL_ERROR,
        payload: mess
    }
};  

export const addShellWarning = (mess) => {
    return {
        type: ADD_SHELL_WARNING,
        payload: mess
    }
};  

export const addShellNotofication = (mess) => {
    return {
        type: ADD_SHELL_NOTIFICATION,
        payload: mess
    }
};  