import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Texto = ( ) => {

  const [texto, setTexto] = useState("Hola mundo!");

  const actualizaTexto = () => {
    setTexto('Olá mundo!');
  }

  return (
    <Text style={styles.text} onPress={actualizaTexto}>{texto}</Text>
  )
}

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Texto/>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 25
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
