import React from 'react';
import {Text} from 'react-native';

export default function Comp(){
    return <Text>MULTI - Componente principal (default)</Text>
}

export function Comp1(){
    return <Text>MULTI - Componente #1 secundario não default</Text>
}

export function Comp2(){
    return <Text>MULTI - Componente #2 secundario não default</Text>
}
//export{ Comp1, Comp2};

/**
 * Componentes exportados como default pode ser anonimos
 * Caso componente não seja default deverá ser importado entre {Comp1,Comp2}
 */