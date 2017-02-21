/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class rnapp extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  changeCounter(val) {
    this.setState(prevState => ({ counter: prevState.counter + val }));
  }

  addOne() { this.changeCounter(1); }
  subtractOne() { this.changeCounter(-1); }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button title="Add One" onPress={() => this.addOne()} />
        <Button title="Subtract One" onPress={() => this.subtractOne()} />
        <Text>{this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnapp', () => rnapp);
