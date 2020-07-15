import React, {Component} from 'react'
import { Text, TextInput }from 'react-native'

import Estilo from '../../style/estilo'

export default class Mega extends Component {

    state ={
        qtdNumeros: this.props.qtdNumeros
    }

    //Função para auterar o estado
    alterarQtdNumeros(numero){
        this.setState({qtdNumeros: numero})
    }

    render(){
        return(
            <>
                <Text style={Estilo.txtG}>Gerar numero: {this.state.qtdNumeros}</Text>
                <TextInput 
                    placeholder="Quantidade de numeros" 
                    value={this.state.qtdNumeros}
                    onChange={qtd => this.alterarQtdNumeros(qtd)}/>
            </>
        ) 
        
    }
} 