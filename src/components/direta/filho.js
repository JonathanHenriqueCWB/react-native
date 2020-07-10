import React from 'react';
import { Text } from 'react-native';

import Estilo from '../../style/estilo';

export default props => {
    return(
        <>
            <Text style={Estilo.Text}>{props.a}</Text>
            <Text style={Estilo.Text}>{props.b}</Text>
        </>
    );
}