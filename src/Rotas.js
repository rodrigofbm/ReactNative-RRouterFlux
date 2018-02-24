import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import CenaPrincipal from './components/CenaPrincipal'
import CenaSobreJogo from './components/CenaSobreJogo'
import CenaOutrosJogos from './components/CenaOutrosJogos'
import CenaResultado from './components/CenaResultato'


const Rotas = () => ( 
    <Router>
        <Scene key= 'Principal' component={CenaPrincipal} initil={true} title='Cara ou Coroa' />
        <Scene key= 'SobreJogo' component={CenaSobreJogo} title='Sobre o Jogo' />
        <Scene key= 'OutrosJogos' component={CenaOutrosJogos} title='Outros Jogos' />
        <Scene key='Resultado' component={CenaResultado} title='Resultado' />
     </Router>
);

export default Rotas;