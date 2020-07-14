import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default props => {
    return(
        <View style={{
            height: 20,
            width: 20,
            backgroundColor: props.cor || '#0f0'
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