import React from 'react';
import {Text, View} from 'react-native'

import Estilo from '../style/estilo';

export default (args) => {
    const [minimo, maximo] = [args.min, args.max];
    return (
        <View>
            <Text style={Estilo.txtG}>
                Numeros passados: {args.min} e {args.max} {" "}
                Numero gerado entre esses valores: {Sortear(minimo, maximo)}
            </Text>
        </View>
    );
}

function Sortear(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}