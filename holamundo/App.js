import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ImageBackground
} from 'react-native';

const App = () => {

  return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.photo}
          source={{ uri: 'https://placekitten.com/200/200'}}
        >
          <Text>fasdfdfdsfdfgfd</Text>
        </ImageBackground>
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
