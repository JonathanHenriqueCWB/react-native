import React, {useState} from 'react';
import { Text, TextInput, View } from 'react-native';

export default props => {

    const [nome, setNome] = useState('Nome');

    return(
        <View>
            <TextInput 
                placeholder="Digite seu nome" 
                value={nome}
                onChangeText={nome => setNome(nome)}></TextInput>
            <Text>{nome}</Text>
        </View>
    );
}