import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Estilo from '../../style/estilo';

export default props => {

    const num = props.num;

    return(
        <View style={style.Display}>
            <Text style={[Estilo.txtG], style.DisplayText}>Numero vindo do componente pai: {num}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300
        
    },
    DisplayText: {
        color: '#fff'
    }
})