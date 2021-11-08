import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';

const App = () => {
  return (  
    <>
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <View style={{ flexDirection: 'row'}}>
            <Image
              style={ styles.banner }
              source={ require('./components/assets/img/bg.jpg')}
            />
          </View>

          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Que hacer en Paris</Text>

            <ScrollView horizontal={true}>
              <View style={styles.contenedorActividad}>
                <Image
                  style={ styles.imagenActividad }
                  source={ require('./components/assets/img/actividad1.jpg')}
                />
              </View>
              <View style={styles.contenedorActividad}>
                <Image
                  style={ styles.imagenActividad }
                  source={ require('./components/assets/img/actividad2.jpg')}
                />
              </View>
              <View style={styles.contenedorActividad}>
                <Image
                  style={ styles.imagenActividad }
                  source={ require('./components/assets/img/actividad3.jpg')}
                />
              </View>
              <View style={styles.contenedorActividad}>
                <Image
                  style={ styles.imagenActividad }
                  source={ require('./components/assets/img/actividad4.jpg')}
                />
              </View>
              <View style={styles.contenedorActividad}>
                <Image
                  style={ styles.imagenActividad }
                  source={ require('./components/assets/img/actividad5.jpg')}
                />
              </View>
            </ScrollView>

            <Text style={styles.titulo}>Los mejores Alojamientos</Text>

            <View>
              <View style={styles.alojamientos}>
                  <Image
                    style={ styles.mejores }
                    source={ require('./components/assets/img/mejores1.jpg')}
                  />
              </View>

              <View style={styles.alojamientos}>
                  <Image
                    style={ styles.mejores }
                    source={ require('./components/assets/img/mejores2.jpg')}
                  />
              </View>

              <View style={styles.alojamientos}>
                  <Image
                    style={ styles.mejores }
                    source={ require('./components/assets/img/mejores3.jpg')}
                  />
              </View>
            </View>

            <View>

            <Text style={styles.titulo}>Los mejores Alojamientos</Text>
              <ScrollView horizontal={true}>

                  <View style={styles.alojamientos}>
                    <Image
                      style={ styles.imagenActividad }
                      source={ require('./components/assets/img/hospedaje1.jpg')}
                    />
                  </View>
                  <View style={styles.alojamientos}>
                    <Image
                      style={ styles.imagenActividad }
                      source={ require('./components/assets/img/hospedaje2.jpg')}
                    />
                  </View>
                  <View style={styles.alojamientos}>
                    <Image
                      style={ styles.imagenActividad }
                      source={ require('./components/assets/img/hospedaje3.jpg')}
                    />
                  </View>
                  <View style={styles.alojamientos}>
                    <Image
                      style={ styles.imagenActividad }
                      source={ require('./components/assets/img/hospedaje4.jpg')}
                    />
                  </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20
  },
  contenedor:{
    marginHorizontal: 10
  },
  imagenActividad:{
    width: 300,
    height: 230
  },
  contenedorActividad: {
    paddingHorizontal: 10
  },
  mejores: {
    width: '100%',
    height: 250,
  },
  alojamientos: {
    paddingVertical: 15,
    paddingHorizontal: 5
  },

})

export default App;

/*
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
*/