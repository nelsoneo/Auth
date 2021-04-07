import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component {
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
  }
  

  render() {
    return (
      <View >
        <Header headText= 'Authentication' />
          <LoginForm />
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
});

export default App;
