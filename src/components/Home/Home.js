import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Dimensions, Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import { getDrug, getMeds } from '../../utils/apiCalls';
import { setMeds } from '../../actions/index';
import { RFPercentage } from "react-native-responsive-fontsize";

const { height, width } = Dimensions.get('screen');

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      medName: '',
      genericName: 'Enter medication to find generic name'
    }
  };

  async componentDidMount() {
    const { setMeds } = this.props;
    try {
      const meds = await getMeds();
      await setMeds(meds)
    } catch ({ message }) {
      console.log(message)
    }
  }
  
  getGeneric = async () => {
    Keyboard.dismiss();
    const { medName } = this.state 
    try {
      const genericName = await getDrug(medName)
      this.setState({ genericName })
    } catch ({ message }){
      this.errorAlert(message)
    }
  }

  errorAlert = (errorMessage) => {
    Alert.alert (
      errorMessage
    )
  }
  
  static navigationOptions = {
    title: 'TravelRx',
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
          <ScrollView>
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.input}
                placeholder='Enter Medication'
                textAlign='center'
                onChangeText={(medName) => this.setState({ medName })}
                value={this.state.medName}
                clearButtonMode='while-editing'
                keyboardShouldPersistTaps='handled'
              />
              <TouchableOpacity 
                style={styles.find}
                onPress={() => this.getGeneric()}
              >
              <Text style={styles.findText}>Find Generic Name</Text>
          </TouchableOpacity>
        </View>
            </ScrollView>
        <Text style={styles.generic}>{this.state.genericName}</Text>
        <Footer navigation={navigation}/>
      </View>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setMeds: meds => dispatch(setMeds(meds))
}) 

export default connect(null, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingTop: height * .06
  },
  input: {
    borderColor: '#D7D7D7',
    borderRadius: 12,
    borderWidth: 2,
    height: 50,
    fontSize: 15,
    marginBottom: 35,
    marginTop: 20,
    width: width * .85,
  },
  text: {
    color: '#EBEBEB',
    fontSize: 18,
    textAlign: 'center',
  },
  find: {
    backgroundColor: '#FFF',
    borderColor: '#3499AA',
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: height * 0.02,
    overflow: 'hidden',
    padding: 12,
    width: width * .85
  },
  findText: {
    fontWeight: 'bold',
    color: '#3499AA',
    textAlign: 'center',
    fontSize: 18
  },
  button: {
    backgroundColor: '#3499AA',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    display: 'flex',
    fontWeight: 'bold',
    justifyContent: 'center',
    margin: 0,
    overflow: 'hidden',
    padding: 0,
    width: width * 0.85,
  },
  generic: {
    fontSize: RFPercentage(4.5),
    color: '#000',
    marginBottom: 75,
    textAlign: 'center'
  }
});
