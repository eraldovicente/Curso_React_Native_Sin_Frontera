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
    <Text onPress={actualizaTexto}>{texto}</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
