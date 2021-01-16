import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

const App = () => {

  return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: '1', name: 'Eraldo'},
            { key: '2', name: 'galinha'},
            { key: '3', name: 'ganso'},
            { key: '4', name: 'cachorro'},
            { key: '5', name: 'pato'},
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        />
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
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default App;
