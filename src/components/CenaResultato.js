
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

const imgCara = require('../imgs/moeda_cara.png');
const imgCoroa = require('../imgs/moeda_coroa.png');

export default class CenaResultado extends Component {
    constructor(props){
        super(props);

        this.state = {resultado: ''};

    }

    componentWillMount(){
        const numRand = Math.floor(Math.random() * 2); 
        let caraOuCoroa = '';

        switch (numRand) {
            case 0:
                caraOuCoroa = 'cara';
                break;
        
            case 1:
                caraOuCoroa = 'coroa';
                break;
        }

        this.setState({resultado: caraOuCoroa});
    }

  render() {
    
    if (this.state.resultado === 'cara'){
        return(
            <View style={styles.container}>
                <Image source={imgCara} />
            </View>
        );
    }
    return(
        <View style={styles.container}>
            <Image source={imgCoroa} />
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