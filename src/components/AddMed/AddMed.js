import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker, Dimensions } from 'react-native';
import Footer from '../Footer/Footer';

const { height, width } = Dimensions.get('screen');

export default class AddMed extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dosage: '',
      frequency: 1,
      withFood: false,
      inventory: null
    }
  }

  static navigationOptions = {
    title: 'Add Medication',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#3499AA'
    },
    headerTintColor: '#EBEBEB',
    headerTitleStyle: {
      fontSize: height * 0.05,
    },
  };

  render() {
    const { navigation } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.addMed}>
        <TextInput
          style={styles.input}
          placeholder='Medication name'
          textAlign='center'
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          style={styles.input}
          placeholder='Dosage'
          textAlign='center'
          onChangeText={(dosage) => this.setState({ dosage })}
          value={this.state.dosage}
        />
        <TextInput 
          style={styles.input}
          placeholder='Times taken per day'
          textAlign='center'
          keyboardType={'numeric'}
          onChange={(frequency) => this.setState({ frequency })}
          value={this.state.frequency}
        />
        <TextInput 
          style={styles.input}
          placeholder='Inventory'
          textAlign='center'
          keyboardType={'numeric'}
          onChange={(inventory) => this.setState({ inventory })}
          value={this.state.inventory}
        />
        <Picker
          selectedValue={this.state.withFood}
          style={styles.picker}
          onValueChange={(itemValue) =>   this.setState({ withFood: itemValue})}
          >
          <Picker.Item label='Take WITH food' value={false}/>
          <Picker.Item label='Take WITHOUT food' value={true}/>
        </Picker>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
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
  text: {
    color: '#EBEBEB',
    textAlign: 'center',
    fontSize: height * 0.04
  },
  input: {
    borderColor: '#D7D7D7',
    borderRadius: 12,
    borderWidth: 2,
    height: 50,
    fontSize: 15,
    width: width * 0.85,
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
    width: width * 0.85,
  },
  addMed: {
    flex: 1,
    justifyContent: 'space-around'
  },
  picker: {
    flex: 0,
    justifyContent: 'space-around',
    height: 75,
  }
});