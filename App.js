import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (  
    <>
      <SafeAreaView style={styles.mainContainer}>

        {/*<View style={styles.contenedorTitulo}>
          <Text style={styles.textoTitulo}>Los Layouts en React Native </Text>
        </View> */}

        <View style={styles.caja1}>
          <Text>Caja 1</Text>
        </View>

        <View style={ styles.caja2}>
          <Text>Caja 2</Text>
        </View>

        <View style={ styles.caja3}>
          <Text>Caja 2</Text>
        </View>

        <View style={ styles.caja4}>
          <Text>Caja 2</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  contenedorTitulo: {
    height: 60,
    marginTop: 40,
  },
  mainContainer: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    flexDirection: 'row'
  },
  caja1: {
    backgroundColor: 'navy',
    padding: 20
  },
  caja2: {
    backgroundColor: 'red',
    padding: 20
  },
  caja3: {
    backgroundColor: 'yellow',
    padding: 20
  },
  caja4: {
    backgroundColor: 'blue',
    padding: 20
  },
  textoTitulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default App;