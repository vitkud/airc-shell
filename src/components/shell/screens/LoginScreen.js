import React, { Component } from 'react';

import { LoginForm } from 'components/shell/forms'

class LoginScreen extends Component {
    render() {
        return (
            <div className="ushell-container login">
                    <div className="ushell-login-container">
                        <div className="ushell-login-block paper">
                            <div className="ushell-login-block-logo">
                                <img src={require('assets/img/logo-rounded.svg')} alt="Logo"/>
                            </div>

                            <div className="ushell-login-block-title">
                                Welcome back!
                            </div>

                            <div className="ushell-login-block-illustration">
                                <img src={require('base/images/illustrations/log-in.svg')} alt="Illustration"/>
                            </div> 

                            <LoginForm />
                        </div>
                        <div className="ushell-login-bottom-navigation">
                            <ul>
                                <li><a href="http://untill.com" target="_blank" rel="noopener noreferrer">Homepage</a></li>
                                <li><a href="/" rel="noopener noreferrer">Knowledge base</a></li>
                                <li><a href="/" rel="noopener noreferrer">App store</a></li>
                                <li><a href="/" rel="noopener noreferrer">Google play</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}

export default LoginScreen;