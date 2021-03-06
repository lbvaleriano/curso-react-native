import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props => 
    <Text style={{ fontSize: 35 }}>
        {props.label}
        {props.ano + 2000}
    </Text>

// definindo valores padrão...
ValidarProps.defaultProps = {
    label: 'Ano: '
}

// definindo validações...
ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps