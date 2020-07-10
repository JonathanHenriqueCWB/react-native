import React, {useState} from 'react';
import {Text, Button} from 'react-native';

import Estilo from '../style/estilo';

export default props =>{
    
    //let numero =0;
    const [numero, setNumero] = useState(props.inicial);

    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)

    return(
        <>
            <Text style={Estilo.txtG}>Contador: {numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
        
    );
}

/**
 * Apessar da variavel não ser declarado como constante, e 
 * o valor estar sendo auterado na variavel ela não gera
 * nenhum impacto na interface grafica.
 * 
 * Para poder fazer isso é utilizado o useState da lib react
 */