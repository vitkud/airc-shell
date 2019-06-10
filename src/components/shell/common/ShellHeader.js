import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    doLogout,
    selectModule,
    selectView
} from 'actions';

import ShellHeaderViewsBar from './ShellHeaderViewsBar';
import ShellHeaderApplicationsBar from './ShellHeaderApplicationsBar';

class ShellHeader extends Component {
    
    render() {
        return (
            <div className="ushell-header">
                <div className="content-container ushell-header-container">
                    <div className="ushell-header-logo">
                        <a href="index.html">
                            <img src={require('assets/img/logo.svg')} alt="logo"/>
                        </a>
                    </div>
                    <div className="ushell-header-nav">
                        <div className="ushell-header-action-pane">
                            <a href="/#" target="_self" className="ushell-header-action-pane-btn with-icon">
                                <i className="icon-to-do" />
                                <span className="badge bottom right danger">2</span>
                            </a>

                            <a href="/#" target="_self" className="ushell-header-action-pane-btn with-icon">
                                <i className="icon-notification" />
                                <span className="badge bottom right success">10</span>
                            </a>

                            <a href="/#" target="_self" className="ushell-header-action-pane-btn user" onClick={() => this.props.doLogout()}>
                                <img src={require('assets/img/user_stub.png')} alt="That's you!"/>
                            </a>
                        </div>

                        <ShellHeaderApplicationsBar />

                        <div className="clear"></div>
                    </div>

                    <ShellHeaderViewsBar />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { manifest, module, view } = state.shell;

    return { manifest, module, view };
}

export default connect(mapStateToProps, {
    doLogout,
    selectModule,
    selectView
})(ShellHeader);