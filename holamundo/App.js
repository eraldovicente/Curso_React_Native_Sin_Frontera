import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';

const App = () => {

  return (
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={{ uri: 'https://placekitten.com/200/200'}}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingVertical: 22
  }
});

export default App;
