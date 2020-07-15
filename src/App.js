import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

//Import folha de estilo
import Estilo from './style/estilo';
//Componentes default
//import Primeiro from './components/Primeiro';
//import Comp from './components/Multi';
//Componentes não default, normalmente utilizado em classe multicomponentes
//import {Comp1, Comp2} from './components/Multi';
//import MimMax from './components/MinMax';
//import MinMax from './components/MinMax';
//import Aleatorio from './components/Aleatorio';
//import Titulo from './components/TItulo';
//import Btn from './components/Botao';
//import Contador from './components/Contador';
//import TesteSnippet from './components/TesteSnippet';
//import Pai from './components/direta/Pai';
//import Pai from './components/indireta/Pai';
//import ContadorV2 from './components/contador/ContadorV2';
//import ParImpar from './components/ParImpar';
//import Pai from './components/relacao/Pai';
//import Familia from './components/relacao/Familia';
//import Membro from './components/relacao/Membro';
//import UsuarioLogado from './components/UsuarioLogado';
//import ListaProdutos from './components/produtos/LIstaProdutos';
// import ListaProdutosV2 from './components/produtos/LIstaProdutosV2';
// import Digite from './components/DigiteSeuNome';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FLexboxV4 from  './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

function App() {
  return (
    <SafeAreaView style={Estilo.Container}>
      {/*
      <Text>App Component</Text>
      <Primeiro></Primeiro>
      <Comp></Comp>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <MinMax min="3" max="20"/>
      <Aleatorio min={1} max={60} />
      <Titulo principal="Cadastro" secundario="Tela de cadastro" /> 
      <Btn />
      <Contador inicial={10} passo={5}/>
      <TesteSnippet />
      <Pai />
      <Pai />
      <ContadorV2 />
      <ParImpar num={10}/>
      <Pai></Pai>
      <Familia>
      <Membro nome="Anderson" sobrenome="Carvalho"/>
      <Membro nome="Bianca" sobrenome="Martins" />
      </Familia>
      <UsuarioLogado usuario={{nome:'Guilherme', email:'gui@email.com'}}/>
      <ListaProdutos />
      <ListaProdutosV2 />
      <Digite />
      <FlexboxV1 />
      <FlexboxV2 />
      <FlexboxV3 />
      <FLexboxV4 />
    */}
    <Mega />
    </SafeAreaView>
  );
}
export default App;

//Varivavel de estilo
const style = StyleSheet.create({
  Container: {
    backgroundColor: '#B0E0E6',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});