import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export class MedicineCabinet extends Component {
  
  static navigationOptions = {
    title: 'Medicine Cabinet',
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
    const { navigation, user } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.medContainer}>
          {user === null && <Text>Please sign in or create an account to view Medicine Cabinet</Text>}
          {user != null && <View style={styles.medicine}>
            <MaterialCommunityIcons
              color='#3499AA'
              name='pill'
              size={60}
              />
              <View>
                <Text style={styles.name}>Phenergan</Text>
                <Text style={styles.genericName}>Promethazine</Text>
              </View>
          </View>}
          <View style={styles.medicine}>
            <MaterialCommunityIcons
              color='#3499AA'
              name='pill'
              size={60}
              />
              <View>
                <Text style={styles.name}>Vibramycin</Text>
                <Text style={styles.genericName}>Doxycycline</Text>
              </View>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('AddMed')}
        >
          <Text style={styles.buttonText}>
            Add Medication
          </Text>
        </TouchableOpacity>
        <Footer navigation={navigation}/>      
      </View>
    )
  }
}

export const mapStateToProps = ({ user }) => ({
  user
})


export default connect(mapStateToProps)(MedicineCabinet);

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
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20
  },
  genericName: {
    color: '#212B31',
    fontSize: 15,
    marginLeft: 20
  },
  button: {
    backgroundColor: '#3499AA',
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
});
