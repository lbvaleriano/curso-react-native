import React from 'react'
import { Text, View } from 'react-native'
import Padrao from '../estilos/Padrao'

// usando função Arrow
export default props => 
    <Text style={[Padrao.ex]}>Arrow: {props.texto}</Text>

// criação de componente de forma funcional
// export default function(props) { // função anônima que retorna um trecho de JSX, por convenção o parâmetro deve se chamar props
//     return (
//         <Text>{props.texto}</Text>
//     )
// }

// Para retornar mais de um elemento

// Encapsular os elementos num único elemento pai
// export default props =>
//     <View>
//         <Text>Arrow 1: {props.texto}</Text>
//         <Text>Arrow 2: {props.texto}</Text>
//     </View>

// Usar um array
// export default props => [
//         <Text key={1}>Arrow 1: {props.texto}</Text>,
//         <Text key={2}>Arrow 2: {props.texto}</Text>
// ]

// Lembrando que as funções Arraow possuem um return implícito