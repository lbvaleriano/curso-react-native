import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilos/Padrao'
import If from './If'

// Estratégias para renderização condicional
function parOuImpar(num) {
    // if (num % 2 == 0) {
    //     return <Text style={Padrao.ex}>Par (Estratégia 2)</Text>
    // } else {
    //     return <Text style={Padrao.ex}>Impar (Estratégia 2)</Text>
    // }
    const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{v} (Estratégia 3)</Text>
}

export default props =>
    <View>
        {
            parOuImpar(props.numero)
        }
        {/* {
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Par (Estratégia 1)</Text>
            : <Text style={Padrao.ex}>Impar (Estratégia 1)</Text>
        } */}
        {/* <If test={props.numero % 2 == 0}>
            <Text style={Padrao.ex}>Par (Estratégia 4)</Text>
        </If>
        <If test={props.numero % 2 == 1}>
            <Text style={Padrao.ex}>Impar (Estratégia 4)</Text>
        </If> */}
    </View>

// Melhores estratégias: 3, 2, 1, 4