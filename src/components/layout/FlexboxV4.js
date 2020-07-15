import React from 'react';
import { View, StyleSheet, Text  } from 'react-native';

export default props => {
    return(
        <View style={estilo.flex}>
            <View style={estilo.v1}/>
            <View style={estilo.v2}/>
        </View>
    );
}

const estilo = StyleSheet.create({
    flex: {
        backgroundColor: '#000',
        width: 100,
        flexGrow: 1
    },
    v1: {
        backgroundColor: '#f00',
        flexGrow: 8
    },
    v2: {
        backgroundColor: '#0f0',
        flexGrow: 3
    }
})

/*    
    Container pincipal é igual a um então sua altura será correspondente
    a toda a tela do dispositivo mobilie
    
    Containers internos estão dividindo o valor do container pai
    conforme os valres:
    v1 flexGrow = 8, v2 flexGrow = 2, o espaço utilizado dentro será
    correspondente a 10, logo v1 utlizara de 8 espaços e v2 apenas 2
    espaços dentro
*/