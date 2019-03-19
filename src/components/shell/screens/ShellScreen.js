import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShellScreen extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { manifest } = state.shell;

    return { manifest };
};

export default connect(mapStateToProps, null)(ShellScreen);