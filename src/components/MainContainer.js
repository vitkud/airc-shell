import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

//components
import ShellScreen from 'components/shell/screens/ShellScreen';
import LoginScreen from 'components/shell/screens/LoginScreen';

import AuthModal from 'components/shell/modals/AuthModal';

import Footer from 'components/shell/common/Footer';

//assets
import 'assets/css/main.css';

class MainContainer extends Component {
    renderScreen() {
        const { token } = this.props;

        if (!token) {
            return <LoginScreen />;
        }

        return <ShellScreen />;
    }

    renderReAuthPopup() {
        const { token, tokenValid } = this.props;

        if (token && !tokenValid) {
            return <AuthModal />;
        }
    }

    render() {
        return (
            <Fragment>
                <div className="--container">
                    <div className="--wrapper">
                        {this.renderScreen()}
                        
                        <Footer />
                    </div>
                </div>

                {this.renderReAuthPopup()}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { token, tokenValid } = state.shell;

    return {
        token,
        tokenValid
    };
};

export default connect(mapStateToProps, null)(MainContainer);