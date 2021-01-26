import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const App = () => {

  return (
      <View style={styles.container}>
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
