import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Button
} from 'react-native';

const App = () => {

  const [modal, setModal] = useState(false)

  return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modal}
        >
          <View style={styles.center}>
            <View style={styles.content}>
              <Text>Soy un modal</Text>
              <Button title="Cerrar modal" onPress={() => setModal(!modal)}/>
            </View>
          </View>
        </Modal>
        <Button title="Abrir modal" onPress={() => setModal(!modal)} />
      </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25
  },
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
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
