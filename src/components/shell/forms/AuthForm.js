import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import LoginSchema from 'schemas/LoginSchema';

import {
    Form,
    FormRow,
    FormInput,
    Link,
    Button
} from 'base/components';

import {
    doAuth,
    hideAuthModal,
    showForgotModal
} from 'actions';

class AuthForm extends Component {

    closeForm() {
        this.props.hideAuthModal();
    }

    submitForm(values) {
        const { login, password } = values;

        this.props.doAuth(login, password);
    }

    forgotPassword() {
        this.props.showForgotModal();
    }

    render() {
        return (
            <div className="ushell-login-block-form">

                <Formik
                    initialValues={{ 
                        login: '', 
                        password: '' 
                    }}
                    
                    validationSchema={LoginSchema}

                    onSubmit={(values, { setSubmitting }) => {
                        this.submitForm(values);
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {
                        ({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                                <Form>
                                    <form onSubmit={handleSubmit}>
                                        <div className="ushell-auth-form-row">
                                            <div className="grid row-1 col-2 gap-24">
                                                <div className="cell">
                                                    <FormRow>
                                                        <FormInput 
                                                            error={errors.login && touched.login && errors.login}
                                                            value={values.login}
                                                            type="text"
                                                            label="Username"
                                                            input={{
                                                                name:"login",
                                                                onChange:handleChange,
                                                                onBlur:handleBlur,
                    
                                                                placeholder: "Username",
                                                                tabIndex: 1
                                                            }}
                                                        />
                                                    </FormRow>
                                                </div>
                                                <div className="cell">
                                                    <FormRow>
                                                        <FormInput 
                                                            error={errors.password && touched.password && errors.password}
                                                            value={values.password}
                                                            label="Username"
                                                            type="password"
                                                            showToggler
                                                            tip={
                                                                <Link 
                                                                    href="#forgot"
                                                                    text="Forgot password?"
                                                                    onClick={this.forgotPassword.bind(this)}
                                                                    className="forgot_link"
                                                                />
                                                            }
                    
                                                            input={{
                                                                name: "password",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                placeholder: "Password",
                                                                tabIndex: 2
                                                            }}
                                                        />
                                                    </FormRow>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid row-1 col-1">
                                            <div className="cell align-right">
                                                <Button 
                                                    bordered
                                                    text="Close"
                                                    onClick={this.closeForm.bind(this)}
                                                    tabIndex={4}
                                                    title="Close"
                                                />

                                                <Button 
                                                    className="ml-small"
                                                    primary
                                                    text="Sign in"
                                                    onClick={handleSubmit}
                                                    tabIndex={3}
                                                    title="Sign in"
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </Form>
                            )
                    }
                </Formik>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {
     doAuth, 
     hideAuthModal,
     showForgotModal
})(AuthForm);