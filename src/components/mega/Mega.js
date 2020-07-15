import React, {Component} from 'react'
import { Text }from 'react-native'

import Estilo from '../../style/estilo'

export default class Mega extends Component {
    render(){
    return <Text style={Estilo.txtG}>Gerar numero: {this.props.qtdNumeros}</Text>
    }
} 