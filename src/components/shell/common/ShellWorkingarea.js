import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShellWorkingarea extends Component {
    onLoad() {
        return null;
    }

    render () {
        return (
            <div className="ushell-working-area">
                <iframe 
                    title="Plugin manager"
                    id="plugin-manager" 
                    onLoad={this.onLoad.bind()} 
                    ref={ref => this.iframe = ref}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { manifest } = state.shell;

    return { manifest };
};

export default connect(mapStateToProps, null)(ShellWorkingarea);