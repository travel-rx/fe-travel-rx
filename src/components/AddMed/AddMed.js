import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Picker, Dimensions } from 'react-native';
import Footer from '../Footer/Footer';
import { RFPercentage } from "react-native-responsive-fontsize";

const { height, width } = Dimensions.get('screen');

export default class AddMed extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dosage: '',
      frequency: 1,
      withFood: false,
      inventory: 0
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
        <ScrollView>
          <View style={styles.addMed}>
            <TextInput
              style={styles.input}
              placeholder='Medication name'
              textAlign='center'
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              keyboardShouldPersistTaps='always'
            />
            <TextInput
              style={styles.input}
              placeholder='Dosage'
              textAlign='center'
              onChangeText={(dosage) => this.setState({ dosage })}
              value={this.state.dosage}
              keyboardShouldPersistTaps='always'
            />
            <TextInput 
              style={styles.input}
              placeholder='Times taken per day'
              textAlign='center'
              keyboardType={'numeric'}
              onChange={(frequency) => this.setState({ frequency })}
              value={this.state.frequency}
              keyboardShouldPersistTaps='always'
            />
            <Picker
              selectedValue={this.state.withFood}
              style={styles.picker}
              onValueChange={(itemValue) => this.setState({ withFood: itemValue})}
            >
              <Picker.Item label='Take WITH food' value={false}/>
              <Picker.Item label='Take WITHOUT food' value={true}/>
            </Picker>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    height: height * 0.08,
    fontSize: 15,
    marginTop: 20,
    fontSize: RFPercentage(4),
    width: width * 0.85,
  },
  button: {
    backgroundColor: '#3499AA',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    display: 'flex',
    fontWeight: 'bold',
    height: height * 0.06,
    justifyContent: 'center',
    marginTop: 75,
    overflow: 'hidden',
    width: width * 0.85,
  },
  addMed: {
    marginTop: 30
  },
  picker: {
    flex: 0,
    justifyContent: 'space-around',
    height: 75,
    marginTop: 50
  }
});