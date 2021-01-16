import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Texto = (props) => {

  const {children} = props;

  return (
    <Text>{children}</Text>
  )
}

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Texto>
          Hola mundo!
          <Texto> Olá mundo!</Texto>
        </Texto>
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
