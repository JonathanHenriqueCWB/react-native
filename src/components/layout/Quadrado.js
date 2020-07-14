import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default props => {

    const corPadrao = '#000';
    const [lado, base] = [100, 100];

    return(
        <View style={{
            height: lado,
            width: base,
            backgroundColor: props.cor || corPadrao
        }}>

        </View>
    );
}

const estilo = StyleSheet.create({
    Quadrado: {
        height: 20,
        width: 20,
        backgroundColor: '#000'
    }
})