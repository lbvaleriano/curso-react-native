import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilos/Padrao'

// Componentes Controlados x Componentes Não Controlados
// Nos componentes controlados há uma sincronização entre o input e a exibição do estado
// O React tem um ciclo de evento de uma única direção: evento capturado -> chamada função (pode atualizar oe stado) -> renderização elemento

export default class Evento extends Component {

    state = {
        texto: null
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto} />
            </View>
        )
    }
}