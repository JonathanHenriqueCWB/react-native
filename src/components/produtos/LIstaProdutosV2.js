import React from 'react';
import { Text, FlatList } from 'react-native';

import Estilo from '../../style/estilo';
import Produtos from './Produtos';

export default props => {
    
    const renderProduto = ({item: p}) => {
        return <Text>{p.id} {p.nome} {p.preco}</Text>
    }

    return(
        <>
            <Text style={Estilo.txtG}>React Native Flatlist</Text>
            <FlatList data={Produtos} keyExtractor={i => '${i.id}'} renderItem={renderProduto}/>
        </>
    );
}