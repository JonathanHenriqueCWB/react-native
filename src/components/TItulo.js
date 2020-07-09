import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import estilo from '../style/estilo';

export default props => {
    return (
        <Fragment>
            <Text style={estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>
    )
}

/*Tbm pode ser usado duas tag vazia para utilizar o fragment <></>,
nesse caso não a necessidade de importar o fragment*/