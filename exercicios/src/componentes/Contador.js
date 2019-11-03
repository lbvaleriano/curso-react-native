import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

/*
 * RELEMBRANDO: 
 * Numa arrow function o THIS representa o objeto atual
 * Numa função normal o THIS vai variar de acordo com quem chamou o método
 *
 * NÃO CONFUNDIR:
 * onLongPress={this.limpar} : passando uma função para o evento (a função deve ser arrow)
 * onLongPress={() => this.limpar()} : estou passando uma função para o evento
 * onLongPress={this.limpar()} : estou passando o resultado (retorno) de uma função para o evento
 * 
 */


export default class Contador extends Component {

    // o estado pode ser criado através de atribuição. Entretanto, por proteção, é recomendado que a sua alteração seja feita através da função setState
    state = {
        numero: this.props.numeroInicial
    }

    // constructor(props) {
    //     super(props)
    //     this.state = { ... }
    //     this.maisUm = this.maisUm.bind(this) // informa que nesse contexto o THIS será resolvido para o THIS do componente
    // }

    // se não usar uma arrow function o this ficará apontando para undefined
    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    limpar() {
        this.setState({ numero: this.props.numeroInicial })
    }

    render() {
        //this.props.numero++ // gera erro de propriedade apenas como leitura
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={() => this.limpar()}
                    >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}