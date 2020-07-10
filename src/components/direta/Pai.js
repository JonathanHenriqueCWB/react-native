import React from 'react';

import Filho from './filho';

export default props => {

    let x = 13;
    let y = 100;

    return(
        <>
            <Filho a={x} b={y}/>
            <Filho a={x + 100} b={y + 200}/>
        </>
    );
}

/**
 * A comunicação de Pai para filho e chamado de comunicação direta.
 * Como componente pai tem acesso direto ao componente filho
 * dizemos que essa e uma comunicação direta, nesse caso componente
 * pai passa um paramêtro para o componente filho.
 */