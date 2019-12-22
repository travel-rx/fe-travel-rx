import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Footer from '../Footer/Footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class MedicineCabinet extends Component {
  
  static navigationOptions = {
    title: 'Medicine Cabinet',
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
        {/* <Text style={styles.heading}>Medicine Cabinet</Text> */}
        <View style={styles.medContainer}>
          <View style={styles.medicine}>
            <MaterialCommunityIcons
              color='#3499AA'
              name='pill'
              size={65}
              />
              <View>
                <Text style={styles.name}>Phenergan</Text>
                <Text style={styles.genericName}>Promethazine</Text>
              </View>
          </View>
          <View style={styles.medicine}>
            <MaterialCommunityIcons
              color='#3499AA'
              name='pill'
              size={65}
              />
              <View>
                <Text style={styles.name}>Vibramycin</Text>
                <Text style={styles.genericName}>Doxycycline</Text>
              </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Add Medication
          </Text>
        </TouchableOpacity>
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
  heading: {
    color: '#3499AA',
    fontSize: 40,
    paddingTop: 20,

  },
  buttonText: {
    color: '#EBEBEB',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  medContainer: {
    flex: 1,
    margin: 25
  },
  medicine: {
    flex: 1,
    flexDirection: 'row'
  },
  name: {
    color: '#3499AA',
    fontSize: 35,
    fontWeight: 'bold'
  },
  genericName: {
    fontSize: 15,
  },
  button: {
    backgroundColor: '#8BC5C5',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    display: 'flex',
    fontWeight: 'bold',
    height: 45,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 0,
    width: 250,
    marginBottom: 25
  },
  login: {
    height: 400,
    flex: 0,
    justifyContent: 'space-evenly'
  }
})
