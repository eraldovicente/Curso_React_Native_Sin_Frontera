import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Texto = ({texto}) => {
  return (
    <Text>{texto}</Text>
  )
}

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Texto texto={'Hola mundo!'} />
        <Texto texto={'Olá mundo!'} />
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
