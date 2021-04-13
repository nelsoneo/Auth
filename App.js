import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button, Card } from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component {
  state= { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyCi8wsnyX_P7DTymbvEI7cx_TBYp1nUMvM',
        authDomain: 'authentication-authreactnative.firebaseapp.com',
        projectId: 'authentication-authreactnative',
        storageBucket: 'authentication-authreactnative.appspot.com',
        messagingSenderId: '603734192973',
        appId: '1:603734192973:web:59cb20378a880b8b0d7d04',
        measurementId: 'G-P5MLD5JP01'
    });


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress= {() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }
  
  render() {
    return (
      <View >
        <Header headText= 'Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonSytle: {
    marginTop: -50
  }
});

export default App;
