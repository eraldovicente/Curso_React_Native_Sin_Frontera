import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert
} from 'react-native';

const crearDialogo = () => Alert.alert(
  'Titulo', 
  'Subtitulo o mensaje que podemos agregar a este dialogo...',
  [
    {
      text: 'Cancelar',
      onPress: () => {},
      style: 'cancel'
    },
    {
      text: 'Aceptar',
      onPress: () => console.log('boton presionado')
    }
  ],
  { cancelable: false }
)

const App = () => {

  const [modal, setModal] = useState(false)

  return (
      <View style={styles.container}>
        <Button title='Abrir dialogo' onPress={crearDialogo} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingVertical: 22
  }
});

export default App;
