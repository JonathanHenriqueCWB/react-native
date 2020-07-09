import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

//Import folha de estilo
import Estilo from './style/estilo';
//Componentes default
import Primeiro from './components/Primeiro';
import Comp from './components/Multi';
//Componentes não default, normalmente utilizado em classe multicomponentes
import {Comp1, Comp2} from './components/Multi';
import MimMax from './components/MinMax';
import MinMax from './components/MinMax';



function App() {
  return (
    <View style={Estilo.Container}>
      {/*<Text>App Component</Text>
      <Primeiro></Primeiro>
      <Comp></Comp>
      <Comp1></Comp1>
      <Comp2></Comp2>*/}
      <MinMax min="3" max="20"/>
    </View>
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