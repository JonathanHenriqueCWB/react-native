import React from 'react';
import { Text } from 'react-native';

import Estilo from '../style/estilo';
import If from './IF';

export default props => {

    const usuario = props.usuario || {}

    return(
        <>
            <If teste={usuario.nome && usuario.email}>            
                <Text style={Estilo.txtG}>Usuario Logado: </Text>
                <Text style={Estilo.txtG}>{usuario.nome} {usuario.email}</Text>
            </If>
        </>
    );
}

/**
 * Componente If passará uma propriedade para o componente if
 * para poder ser feita a vereficação do objeto, se está ou não
 * preenchido.
 * 
 * Esse componente dependerá do usuario passado por argumento (object) e 
 * do teste condicional feito no componente If, que conforme o resultado
 * do teste renderizará ou não os componentes filhos (children)
 */