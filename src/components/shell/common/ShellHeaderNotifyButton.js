import React, { Component } from 'react';

import { Badge, Button, BaseIcon } from 'base/components';

class ShellHeaderNotifyButton extends Component {
    render() {
        return (
            <Badge count={5}>
                <Button shape="circle"  type="link" >
                    <BaseIcon icon="icon-to-do" />
                </Button>
            </Badge>
        );
    }
}

export default ShellHeaderNotifyButton;