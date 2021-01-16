import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

const width = Dimensions.get('window').width

const App = () => {

  const [text, setText] = useState('Chanchito feliz');
  const [submit, setSubmit] = useState('');

  return (
      <View style={styles.container}>
        <ScrollView>
          <Text>Texto: {submit}</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Escribe acá'
            onChangeText={t => setText(t)}
            defaultValue={text}
          />
          <TouchableWithoutFeedback
            style={styles.TouchableOpacity}
            onPress={() => {
              setSubmit(text)
              alert('Texto enviado con exito')
            }}
          >
            <View style={styles.view}><Text>Aceptar</Text></View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: 'red'
  },
  view: {
    height: 40,
    width: 70
  },
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
  },
  scrollView: {
    width: Dimensions.get('window').width
  }
});

export default App;
