//import _ from 'lodash';

import * as Types from 'actions/types';

const INITIAL_STATE = {
    token: '123',
    tokenValid: true, 
    tokenExpired: null,
    application: null,
    view: null,

    login: true,

    path: null,
    manifest: null
};

export default (state = INITIAL_STATE, action) => {
    let path, app, view, arr;

    switch (action.type) {
        case Types.INIT_APP: 
            if (window && window.location && window.location.pathname) {
                path = window.location.pathname;

                if (path.indexOf('/') === 0) path = path.slice(1);

                arr = path.split('/');

                if (arr[0]) app = arr[0];
                if (arr[1]) view = arr[1];

                return {
                    ...state,
                    application: app || state.application,
                    view: view || state.view
                };
            }

            return state;

        case Types.CHANGE_PATH: 
            if (action.payload) {
                return {
                    ...state,
                    path: action.payload
                }
            }

            return state;

        case Types.IFRAME_LOADING_FINISH:
            return {
                ...state,
                iframeLoaded: true
            };

        case Types.SET_AUTH_TOKEN: 
            return {
                ...state,
                ...action.payload
            };
        
        case Types.DO_LOGOUT: 
            return {
                ...state,
                token: null,
                tokenValid: null,
                tokenExpired: null
            };

        case Types.APPLY_MANIFEST: 
            return {
                ...state,
                manifest: action.payload
            };

        case Types.SELECT_SHELL_MODULE:
            app = action.payload.application;
            view = action.payload.view;

            window.history.pushState('', '', `/${app}/${view || ''}`);


            return {
                ...state,
                ...action.payload,
            };
            
        case Types.SELECT_SHELL_VIEW:
            app = state.application;
            view = action.payload.view;

            window.history.pushState('', '', `/${app}/${view || ''}`);

            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}