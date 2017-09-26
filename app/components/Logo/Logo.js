import React, { Component } from 'react';
import { View, Image, Text, Keyboard } from 'react-native';

import styles from './styles';

export default class Logo extends Component {
  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide);
  }
  componentWillUnmount() {}

  keyboardShow = () => {};
  keyboardHide = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.containerImage}
          source={require('./images/background.png')}
        >
          <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
        </Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}
