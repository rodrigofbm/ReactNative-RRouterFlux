
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const imgJogar = require('../imgs/botao_jogar.png');
const imgSobreJogo = require('../imgs/sobre_jogo.png');
const imgOutrosJogos = require('../imgs/outros_jogos.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.apresentacaoJogo}>
          <Image source={logo} />
          
          <TouchableHighlight onPress={() => { Actions.Resultado(); }}>
                <Image source={imgJogar} />
            </TouchableHighlight>
        </View>

        <View style={styles.rodape}>
            <TouchableHighlight onPress={() => { Actions.SobreJogo(); }}>
                <Image source={imgSobreJogo} />
            </TouchableHighlight>
            
            
            <TouchableHighlight onPress={() => { Actions.OutrosJogos(); }}>
                <Image source={imgOutrosJogos} />
            </TouchableHighlight>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#61BD8C',
    },
    apresentacaoJogo: {
      flex: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    rodape: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });