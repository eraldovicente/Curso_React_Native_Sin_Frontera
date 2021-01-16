import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Texto = ({ style }) => {

  const [texto, setTexto] = useState("Hola mundo!");

  const actualizaTexto = () => {
    setTexto('Olá mundo!');
  }

  return (
    <Text style={[styles.text, style]} onPress={actualizaTexto}>{texto}</Text>
  )
}

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Texto style={styles.red} />
        <Texto style={styles.green} />
        <Texto style={styles.blue} />
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 25,
    height: 100,
    width: 100
  },
  red: {
    flex: 1,
    backgroundColor: 'red'
  },
  green: {
    flex: 2,
    backgroundColor: 'green'
  },
  blue: {
    flex: 3,
    backgroundColor: 'blue'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
