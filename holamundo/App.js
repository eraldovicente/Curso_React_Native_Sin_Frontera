import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width

const App = () => {

  const [text, setText] = useState('Chanchito feliz');

  return (
    <>
      <View style={styles.container}>
        <Text>Texto: {text}</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Escribe acá'
          onChangeText={t => setText(t)}
          defaultValue={text}
        />
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: width
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
