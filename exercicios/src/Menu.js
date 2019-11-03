import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar' 
import Inverter, { MegaSena } from './componentes/Multi' 
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

// É possível passar apenas o nome do componente em vez de uma arrow funtion, mas não será possível passar parâmetros
export default createDrawerNavigator({
    Flex: {
        screen: Flex,
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista Flex'}
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado'}
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps label='Ano.: ' ano={18} />
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6} />, // MegaSena é o componente, numeros é a propriedade
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!!' />
    }
}, { drawerWidth: 300 })

/*
 * Um componente pode ou não ter um estado 
 * Quando crio um componente baseado numa função, ele não tem estado, ele é STATELESS
 * Quando crio um componente baseado em classe, ele possui estado, ele é STATEFULL, esse estado pode ser manipulado internamente
 *  
 */ 