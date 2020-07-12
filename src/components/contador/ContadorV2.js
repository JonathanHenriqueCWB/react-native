import React, {useState} from 'react';
import { Text } from 'react-native';

import Estilo from '../../style/estilo';
import ComponenteDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default props => {

    // Alterando estado da view
    const [num, setNum] = useState(0);

    //Função serão passadas para componentes de botoes
    const inc = () => setNum(num + 1);
    const dec = () => setNum(num - 1);

    return(
        <>
            <Text style={Estilo.txtG}>
                CntadorV2
            </Text>
            <ComponenteDisplay num={num} />
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    );
}

/**
 * Contador v2 terá um comunicação direta com component display
 * e com os botoes
 * 
 * Display será responsavel por renderizar a tela, conform o valor
 * passado na constante num, que por sua vez está utilizando o useState
 * para quando o seu valor for alterado serjá refletido interface de usuario
 * 
 * ContadorBotoes será responsave somente por incrementar e decrementar o valor
 * da constante num, para isso será passado duas funções desse componente para
 * o contatodrBotoes.
 */