import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Footer from '../Footer/Footer';


export default class About extends Component {

  static navigationOptions = {
    title: 'About',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#3499AA'
    },
    headerTintColor: '#EBEBEB',
    headerTitleStyle: {
      fontSize: 30,
    },
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Havana brown. Egyptian mau american shorthair. Scottish fold. Kitten grimalkin so puma malkin maine coon. Manx. Munchkin leopard savannah, yet tom, or egyptian mau persian. Tom kitten so cougar. Cougar abyssinian , so ocicat yet cornish rex yet ragdoll and tom british shorthair. Birman jaguar ocelot and tomcat.
          </Text>
          <Text style={styles.text}>
            Balinese siamese. Norwegian forest balinese savannah yet himalayan british shorthair leopard bengal. Abyssinian . Ocelot grimalkin so lynx. Tiger devonshire rex, for persian so balinese so kitten, leopard. Cougar ocelot yet singapura. Scottish fold savannah munchkin yet turkish angora tabby or balinese singapura. 
          </Text>
          <Text style={styles.text}>
            Devonshire rex singapura grimalkin. Malkin malkin or cornish rex. Grimalkin sphynx ragdoll or devonshire rex yet tomcat but birman for mouser. British shorthair tiger. Bobcat egyptian mau. Norwegian forest british shorthair but cougar ragdoll leopard, savannah russian blue.
          </Text>
        </View>
        <Footer navigation={navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textContainer: {
    margin: 20
  },
  text: {
    color: '#212b31',
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
});
