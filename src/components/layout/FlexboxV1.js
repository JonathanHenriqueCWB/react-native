import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default props => {
    return(
        <View style={estilo.Flexv1}>
            <Quadrado />
            <Quadrado cor='#f00'/>
            <Quadrado cor='#0f0'/>
            <Quadrado cor='#00f'/>
        </View>
    );
}

const estilo = StyleSheet.create({
    Flexv1: {
        backgroundColor: '#666',
        flex: 1, // Correspondente a coluna inteira
        justifyContent: "center" // Alinhamento dos elementos dentro dessa coluna
    }
})