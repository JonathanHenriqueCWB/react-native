import React, {useState} from 'react';
import { Text } from 'react-native';

import Filho from './Filho';

export default props => {

    //Auterando estado para poder mostrar na tela
    const [num, setNum] = useState(0)
    const [txt, setText] = useState("")

    //função que será enviada para ser utilizada no componente filho
    //logo numero que será passado no argumento da função é conrrespondente
    //a resultado do calculo feito no componente filho
    function exibirValor(numero, texto){
        setNum(numero); //Chama função de auterar o estado
        setText(texto); //Chama função de auterar o estado
    }

    return(
        <>
            <Text>{txt}{num}</Text>
            <Filho funcao={exibirValor} min={1} max={60} />
            <Text></Text>
        </>
    );
}

/**
 * Nesse caso será necessario passar a função como parametro
 * para o componente filho.
 * 
 * Componente pai passara uma função e dois valores interios para
 * componente filho, com os dois numeros será gerado um outro aleatorio, 
 * esse numero aleatorio será jogado na função que tbm foi passado como
 * parametro.
 * 
 * O componente pai apenas apresentará o valor utilizando estado.
 * 
 * O numero foi gerado no filho e atulaizado a parte grafica no
 * componente pai, comunicação indireta
 */