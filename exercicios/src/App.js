// import React, { Component } from 'react' // pode ser usado como mostrado abaixo, sem especificar o Component
import React from 'react'
import { View, StyleSheet } from 'react-native' // esses elementos foram exportados sem o default

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar' // esse elemento foi exportado com o default
import Inverter, { MegaSena } from './componentes/Multi' // esse elemento foi exportado sem o default

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.f20}>App!</Text> */}
                <Simples texto='Flexível!!!!!'/>
                <ParImpar numero={30} />
                <Inverter texto='React Nativo !' />
                <MegaSena numeros={6} />
            </View>
        )
    }
}

// Outra estratégia
// export default function() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.f20}>App Função!</Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    f20: {
        fontSize: 40   
    }
})