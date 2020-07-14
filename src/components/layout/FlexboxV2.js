import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default props => {
    return(
        <View style={estilo.flex}>
            <Quadrado cor={'#f00'} />
            <Quadrado cor={'#0f0'} />
            <Quadrado  cor={'#00f'}/>
        </View>
    );
}

const estilo = StyleSheet.create({
    flex: {
        width: '100%',
        backgroundColor: '#000',
        
        alignItems: "flex-end", // Alinhamento dos itens na linha 
        justifyContent: "space-between",
    }
})

// alignItems - Utilizado para alinhar os intens na linha

//Trabalhando com flexbox no eixo cruzado (linha)