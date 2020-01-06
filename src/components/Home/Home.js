import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import { getDrug } from '../../utils/apiCalls';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      medName: '',
      genericName: ''
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
    const { medName, user } = this.state 
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
        <TextInput 
          style={styles.input}
          placeholder='Enter Medication'
          textAlign='center'
          onChangeText={(medName) => this.setState({ medName })}
          value={this.state.medName}
        />
        <TouchableOpacity 
          style={styles.find}
          onPress={() => this.getGeneric()}
        >
          <Text style={styles.findText}>Find Generic Name</Text>
        </TouchableOpacity>
        <Text style={styles.generic}>{this.state.genericName}</Text>
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
    paddingTop: 50
  },
  input: {
    borderColor: '#D7D7D7',
    height: 50,
    width: 250,
    fontSize: 15,
    borderRadius: 12,
    borderWidth: 2
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
    overflow: 'hidden',
    padding: 12,
    width: 250
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
    height: 45,
    justifyContent: 'center',
    margin: 0,
    overflow: 'hidden',
    padding: 0,
    width: 250,
  },
  generic: {
    fontSize: 20,
    color: '#2E3637',
    marginBottom: 20
  }
});
