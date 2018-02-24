
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CenaOutrosJogos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Outros Jogos </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#61BD8C',
    },
    
  });