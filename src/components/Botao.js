import React from 'react';
import {View, Text, Button} from 'react-native';

export default props => {

    function executar() {
        console.warn("Pressinou o botão 01");
    }

    return(
        <>
            <Button title="Executar 01" onPress={executar} />
            <Button title="Executar 02" onPress={() => console.warn("Pressinou o botão 02")} />
        </>        
    )
}