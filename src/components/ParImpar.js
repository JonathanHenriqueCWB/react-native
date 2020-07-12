import React from 'react';
import { Text } from 'react-native';

export default props => <Text>O numero passado é: {(props.num % 2 ==0)? "Par":"Impar"}</Text>