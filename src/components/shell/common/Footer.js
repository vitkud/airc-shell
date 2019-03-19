import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <div className="ushell-footer">
                <div className="content-container ushell-footer-container">
                    <div className="ushell-footer-left">
                        &copy; <span id="dateyear"></span> Untill. All rights reserved.
                    </div>
                    <div className="ushell-footer-center">
                        unTill Web Managment
                    </div>
                    <div className="ushell-footer-right">
                        UI version: <span id="ui_version"></span><br />
                        Installer version: <span id="inst_version"></span><br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;