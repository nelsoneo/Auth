import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { emailInput: '', passwordInput: '', error: '', loading: false };

    onButtonPress() {
        const { emailInput, passwordInput } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword( emailInput, passwordInput )
        .then(this.onLoginSucess.bind(this))
        .catch(() =>  {
            firebase.auth().createUserWithEmailAndPassword( emailInput, passwordInput )
            .then(this.onLoginSucess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication failed.', loading: false });
    }

    onLoginSucess() {
        this.setState({
            emailInput: '',
            passwordInput: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner/>;
        }

        return (
            <Button onPress= {this.onButtonPress.bind(this)}>
                Login In
            </Button>
        );
    }

  render() {
    return (
      <Card>
          <CardSection>
              <Input
                placeholder = 'yourUser@gmail.com'
                label = 'Email:'
                value = { this.state.emailInput }
                onChangeText = { emailInput =>  this.setState({ emailInput })}
              />
          </CardSection>

          <CardSection>
          <Input
                placeholder = 'Your Password'
                label = 'Password:'
                secureTextEntry
                value = { this.state.passwordInput }
                onChangeText = { passwordInput =>  this.setState({ passwordInput })}
              />
          </CardSection>

          <Text style= {styles.erroStyle}>
              {this.state.error}
          </Text>

          <CardSection>
             {this.renderButton()}
          </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
    erroStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'

    }
});

export default LoginForm;
