import React, { Component } from 'react';
import ReactModal from 'react-modal';

class Modal extends Component {
    render() {
        return (
            <ReactModal
                isOpen
                ariaHideApp={false}
                portalClassName="ushell-modal-portal"
                overlayClassName={{
                    base: "ushell-modal-overlay",
                    afterOpen: "ushell-modal-overlay--after-open",
                    beforeClose: "ushell-modal-overlay--before-close"
                }}
                bodyOpenClassName="modal_opened"

                {...this.props}

                className={{
                    base: "ushell-modal-content",
                    afterOpen: "ushell-modal-content--after-open",
                    beforeClose: "ushell-modal-content--before-close"
                }}
            >
                {this.props.children}
            </ReactModal>
        );
    }
}

export default Modal;