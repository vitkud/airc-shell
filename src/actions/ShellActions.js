import {
    ADD_SHELL_ERROR
} from './types';

export const addShellError = (message) => {
    return {
        type: ADD_SHELL_ERROR,
        payload: message
    };
};