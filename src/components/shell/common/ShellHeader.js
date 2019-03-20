import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    doLogout,
    selectModule,
    selectView
} from 'actions';

class ShellHeader extends Component {
    renderActivityBar() {
        const { manifest, module } = this.props;

        if (_.size(manifest) > 0) {
            const res = [];

            _.each(manifest, (mod, id) => {
                res.push(
                    <li 
                        className={module === id ? 'active' : ''}
                        key={mod.code}
                    >
                        <a 
                            href={`/${mod.code}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.selectModule(id);
                                return false;
                            }}
                            title={mod.name}
                        >
                            <span>{mod.name}</span>
                        </a>
                    </li>
                );
            });

            return (
                <div className="ushell-header-activity-bar">
                    <nav className="ushell-header-nav-activity-bar">
                        <ul>
                            {res}
                        </ul>
                    </nav>
                </div>
            );
        }

        return null;
    }

    selectModule(id) {
        const { manifest } = this.props;

        if (id && manifest && manifest[id]) {
            const mod = manifest[id];

            if (mod.path) {
                this.props.changeFrame(mod.path);
            }

            this.props.selectModule(id);
        } else {
            this.props.selectModule(null);
        }
    }

    selectView(code) {
        const { manifest, module } = this.props;
        console.log(code);
        if ( manifest && module &&  manifest[module]) {
            const mod = manifest[module];
            if (mod.views) {
                _.each(mod.views, (view) => {
                    if (view.code === code) {
                        this.props.selectView(code);

                        if (view.path) {
                            this.props.changeFrame(view.path);
                        }

                        return false;
                    }
                });
            }
        }
    }

    renderViewsBar() {
        const { manifest, module, view } = this.props;
        let views = null;
        let mod = null;

        if (manifest && module && manifest[module]) {
            mod = manifest[module];
            views = mod.views;
        }

        if (views && views.length > 0) {
            return (
                <div className="ushell-header-views-bar">
                    <nav>
                        <ul>
                            {views.map(item => {
                                return (
                                    <li 
                                        key={item.code}
                                        className={item.code === view ? 'active' : ''}
                                    >
                                        <a 
                                            href={`/${mod.code}/${item.code}`} 
                                            onClick={(event) => {
                                                event.preventDefault();
                                                this.selectView(item.code);
                                                return false;
                                            }}
                                        >
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            );
        }

        return null;
    }

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

                        {this.renderActivityBar()}

                        <div className="clear"></div>
                    </div>

                    {this.renderViewsBar()}
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