import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Form,
    FormRow,
    FormInput,
    FormButton,
    Link
} from 'base/components';

import {
    doAuth
} from 'actions';

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            login: "",
            password: "",
            showForgot: false,
            errors: {
                password: false,
                login: false
            }
        };
    }

    changeVal(param, value) {
        const { errors } = this.state;

        this.setState({
            [param]: value,
            errors: {
                ...errors,
                [param]: false
            }
        })
    }

    submitForm() {
        const { login, password } = this.state;

        this.props.doAuth(login, password);

    }

    forgotPassword() {
        return null;
    }

    render() {
        const { login, password, errors } = this.state;

        return (
            <div className="ushell-login-block-form">
                <Form>
                    <FormRow>
                        <FormInput 
                            error={!!errors.login}
                            value={login}
                            type="text"
                            label="Username"
                            input={{
                                onChange: (event) => this.changeVal('login', event.target.value),
                                placeholder: "Username",
                                tabIndex: 1
                            }}
                        />
                    </FormRow>

                    <FormRow>
                        <FormInput 
                            error={!!errors.password}
                            value={password}
                            label="Username"
                            type="password"
                            tip={
                                <Link 
                                    href="#forgot"
                                    text="Forgot password?"
                                    onClick={this.forgotPassword()}
                                    className="forgot_link"
                                />
                            }
                            input={{
                                onChange: (event) => this.changeVal('password', event.target.value),
                                placeholder: "Password",
                                tabIndex: 2
                            }}
                            
                            showToggler
                        />
                    </FormRow>

                    <FormRow last>
                        <FormButton 
                            submit
                            text="Sign in"
                            
                            input={{
                                onClick: this.submitForm.bind(this),
                                tabIndex: 3,
                                title: "Sign in"
                            }}
                        />
                    </FormRow>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, { doAuth })(LoginForm);