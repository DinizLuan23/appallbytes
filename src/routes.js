import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Chamado from './pages/Chamado';
import Login from './pages/Login';
import ChamadoRapido from './pages/ChamadoRapido';
import Escolha from './pages/Escolha';

export default createAppContainer(
    createStackNavigator({
        Login:{
            screen: Login,
        },
        Escolha:{
            screen: Escolha,
            navigationOptions: ({navigation}) => ({
                title:'Sair', 
            })
        },
        Chamado,
        ChamadoRapido,
    })
);