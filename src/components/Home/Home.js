import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Dimensions, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import { getDrug } from '../../utils/apiCalls';
import { RFPercentage } from "react-native-responsive-fontsize";


const { height, width } = Dimensions.get('screen');

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      medName: '',
      genericName: 'Enter medication to find generic name',
      error: ''
    }
  };
  
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
  
  getGeneric = async () => {
    Keyboard.dismiss();
    const { medName } = this.state 
    
    try {
      const genericName = await getDrug(medName)
      this.setState({ genericName })
    } catch ({ error }){
    }
  }

  
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
                clearButtonMode='always'
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
        {/* {user === null && 
          <View> 
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('CreateAccount')}
            >
              <Text style={styles.text}>Create Account</Text>
            </TouchableOpacity>
          </View>} */}
        <Footer navigation={navigation}/>
      </View>
    );
  }
}

export const mapStateToProps = ({ user }) => ({
  user
})


export default connect(mapStateToProps)(Home);

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
    marginBottom: height * .05,
    textAlign: 'center'
  }
});
