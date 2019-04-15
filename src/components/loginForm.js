import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        console.log(this.props.email);
        console.log(this.props.password);
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    render() {
        return (
            <Card>
                {/* Email */}
                <CardSection>
                    <Input
                        label="email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                {/* Password */}
                <CardSection>
                    <Input
                        isPassword
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {/* Login Button */}
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password
});

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
