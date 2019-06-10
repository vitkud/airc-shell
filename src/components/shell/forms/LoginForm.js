import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import LoginSchema from 'schemas/LoginSchema';

import {
    Form,
    FormRow,
    FormInput,
    FormButton,
    Link
} from 'base/components';

import {
    doAuth,
    showForgotModal
} from 'actions';

class LoginForm extends Component {
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
                        }) =>  {
                            return (<form onSubmit={handleSubmit}>
                                <Form>
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
        
                                    <FormRow last>
                                        <FormButton 
                                            submit
                                            full
                                            text="Sign in"
                                            
                                            input={{
                                                onClick: handleSubmit,
                                                tabIndex: 3,
                                                title: "Sign in",
                                                disabled: isSubmitting
                                            }}
                                        />
                                    </FormRow>
                                </Form>
                            </form>);
                        }
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
    showForgotModal 
})(LoginForm);