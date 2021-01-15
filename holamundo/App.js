import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Texto = () => {
  return (
    <Text>Hola Mundo!</Text>
  )
}

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Texto />
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
