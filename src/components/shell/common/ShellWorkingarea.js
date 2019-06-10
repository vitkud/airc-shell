import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    changePath,
    iframeLoadingFinished
} from 'actions';

class ShellWorkingarea extends Component {
    constructor() {
        super();

        this.iframe = null;
    }

    componentWillReceiveProps(newProps) {
        if (newProps.path === this.props.path && !this.props.iframeLoaded) {
            this.props.iframeLoadingFinished();
        }
    }

    onLoad() {
        this.props.iframeLoadingFinished();
    }

    render () {
        const { path, loaded } = this.props;
        console.log('ShellWorkingarea rendered');
        return (
            <div className="ushell-working-area">
                <iframe 
                    id="plugin-manager"
                    src={path} 
                    className="ushell-working-area-iframe" 
                    onLoad={(evt) => this.onLoad(evt)} 
                    ref={ref => this.iframe = ref}
                    title="plugin-manager"
                    scrolling="maybe"
                />

                {!loaded ? (
                    <div className="ushell-working-area-loading" />
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { path, iframeLoaded } = state.shell;

    return { path, loaded: iframeLoaded };
};

export default connect(mapStateToProps, { 
    changePath,
    iframeLoadingFinished
})(ShellWorkingarea);