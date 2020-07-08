import React from 'react';
import {Text, View} from 'react-native';

//Componentes default
import Primeiro from './components/Primeiro';
import Comp from './components/Multi';

//Componentes não default, normalmente utilizado em classe multicomponentes
import {Comp1, Comp2} from './components/Multi';

function App() {
  return (
    <View>
      <Text>App Component</Text>
      <Primeiro></Primeiro>
      <Comp></Comp>

      <Comp1></Comp1>
      <Comp2></Comp2>
    </View>
  );
}
export default App;