import React from 'react';;
import {Text} from 'react-native';

import Estilo from '../style/estilo';

export default (props) =>{ 

    console.warn(props);
    console.log(props);

    return(
        <Text style={Estilo.txtG}>
            MinMax - O valor {props.min} e maior que o valor {props.max}
        </Text>
    );
}