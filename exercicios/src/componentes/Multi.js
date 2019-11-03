import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilos/Padrao'

// Apenas um elemento pode ser exportado como padrão (default)
// Um mesmo elemento pode ser exportado simultaneamente com e sem o default

// Quando exporto sem o default a importação só pode ser feita com os elementos entre chaves e separados por vírgula
export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = props => {
    const [min, max] = [1, 60]
    const numeros = Array(props.numeros || 6).fill(0) // Criando um array com todos os seus elementos zerados

    for (let i = 0; i < numeros.length; i++) {
        let novo = 0
        while (numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min +1)) + min
        }
        numeros[i] = novo
    }

    numeros.sort((a, b) => a - b)
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}

// Quando eu exporto com o default a importação só pode ser feita de um único elemtno e sem chaves
export default Inverter

// Outra forma de exportar, declara todos os componentes normalmente e exporta no final
// export { Inverter, MegaSena }

// Normlamente, é criado um único componente por arquivo. Mas isso não é uma regra.
// Também é possível exportar outros elementos, por exemplo, uma função, um objeto, um trecho de estilo