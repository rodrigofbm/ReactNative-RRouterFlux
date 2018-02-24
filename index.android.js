import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

import Rotas from './src/Rotas';

class app6 extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('app6', () => app6);
