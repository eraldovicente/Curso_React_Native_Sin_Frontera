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
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default App;
