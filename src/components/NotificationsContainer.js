import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NotificationItem } from 'components/shell/common/';

class NotificationsContainer extends Component {
    constructor() {
        super();

        this.state = {
            messages: {}
        };
    }

    componentWillReceiveProps(oldProps, newProps) {
        if (newProps.last && (oldProps.last !== newProps.last)) {
            const { last, notifications } = newProps;

            const mess = notifications[last];

            if (mess) {
                this.addMessage(last, mess);
            }
        }
    }

    addMessage(key, value) {
        const { messages } = this.state;

        messages[key] = value;

        this.setState(messages);
    }

    removeMessage(key) {
        const { messages } = this.state;

        if (messages[key]) {
            delete messages[key];
        }

        this.setState(messages);
    }

    renderMessages() {
        const { messages } = this.state;

        if (messages) {
            const list = Object.values(messages);

            return list.map((item) => {
                return <NotificationItem data={item} onRemove={(item) => this.removeMessage(item.id)} />
            });
        }

        return null;
    }

    render() {
        return (
            <div className="ushell-notifications-container">
                {this.renderMessages()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { notifications, last } = state.notify;

    return { notifications, last };
}; 

export default connect(mapStateToProps, )(NotificationsContainer);