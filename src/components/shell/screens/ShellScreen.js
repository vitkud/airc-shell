import React, { Component } from 'react';
import { connect } from 'react-redux';

//components

import {
    ShellHeader,
    ShellWorkingarea
} from 'components/shell/common/';

//actions

import {
    loadManifest,
    checkAuthToken
} from 'actions';

//config

import cfg from 'config.json';

class ShellScreen extends Component {
    constructor() {
        super();
        this.timer = null;
    }

    componentWillMount() {
        this.props.checkAuthToken(true);
        this.props.loadManifest()

        if (this.timer) clearInterval(this.timer);
        
        this.timer = setInterval(() => {
            console.log('checking auth token');
            this.props.checkAuthToken();
        }, cfg.CHECK_INTERVAL);
        
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    onLoad() {
        return null;
    }

    render() {
        return (
            <div className="ushell-container">
                <ShellHeader />
                <ShellWorkingarea />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { manifest, token } = state.shell;

    return { manifest, token };
};

export default connect(mapStateToProps, { loadManifest, checkAuthToken })(ShellScreen);