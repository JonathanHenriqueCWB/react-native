import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default props => {
    return(
        <View style={estilo.flex}>
            <Quadrado cor={'#f00'} lado={80} />
            <Quadrado cor={'#0f0'} lado={90} />
            <Quadrado  cor={'#00f'}lado={100} />
        </View>
    );
}

const estilo = StyleSheet.create({
    flex: {
        height: 350,
        width: '100%',
        backgroundColor: '#000',

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline"
    }
})

//flexDirection - Altera o eixo principal