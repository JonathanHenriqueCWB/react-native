import React from 'react';
import { Text } from 'react-native';

export default props => {

    const numero = props.num;
    const imparPar = (numero % 2 == 0)? "Par":"Impar";

    return(
        <Text>O numero passado é: {(props.num % 2 ==0)? "Par":"Impar"}</Text>
    );
}