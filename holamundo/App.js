import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

const App = () => {

  return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
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
