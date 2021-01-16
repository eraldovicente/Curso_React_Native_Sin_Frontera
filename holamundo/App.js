import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  if(loading) {
    return <View style={styles.center}><Text>Cargando...</Text></View>
  }

  return (
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={item => String(item.id)}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
