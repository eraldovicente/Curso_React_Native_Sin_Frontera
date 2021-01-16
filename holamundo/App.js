import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SectionList
} from 'react-native';

const data = [
  { key: '1', name: 'Eraldo'},
  { key: '2', name: 'galinha'},
  { key: '3', name: 'ganso'},
  { key: '4', name: 'cachorro'},
  { key: '5', name: 'pato'},
]

const App = () => {

  return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'Group 1', 
              data: [
                { key: '1', name: 'Eraldo'},
                { key: '2', name: 'galinha'},
                { key: '3', name: 'ganso'},
                { key: '4', name: 'cachorro'},
                { key: '5', name: 'pato'},
              ]
            },
            {
              title: 'Group 2', 
              data: [
                { key: '6', name: 'Eraldo'},
                { key: '7', name: 'galinha'},
                { key: '8', name: 'ganso'},
                { key: '9', name: 'cachorro'},
                { key: '10', name: 'pato'},
              ]
            }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
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
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#EEE',
    paddingTop: 2
  }
});

export default App;
