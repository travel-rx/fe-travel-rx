import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { RFPercentage } from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get('screen');

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
    const { navigation, meds } = this.props;
    console.log('in cabinet', meds)
    const medications = meds.map(medication => {
      return (
        <TouchableOpacity 
          style={styles.medicine} 
          key={medication.name}
          onPress={() => navigation.navigate('MedDetails', {medication: medication})}
        >
          <MaterialCommunityIcons
            color='#3499AA'
            name='pill'
            size={50}
          />
          <View>
          <Text style={styles.name}>{medication.name}</Text>
          <Text style={styles.genericName}>{medication.generic_name}</Text>
          </View>
        </TouchableOpacity>
      )
    })

    return (
      <View style={styles.container}>
        <ScrollView>
          {meds.length === 0 && <Text>You do not have any medications in your cabinet yet. Click below to add a medication.</Text>}
          { medications }
        </ScrollView>
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

export const mapStateToProps = ({ meds }) => ({
  meds
})

export default connect(mapStateToProps)(MedicineCabinet);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#EBEBEB',
    textAlign: 'center',
    fontSize: RFPercentage(4),
  },
  medicine: {
    flex: 1,
    flexDirection: 'row',
    marginTop: height * .06,
    width: width * .9,
  },
  name: {
    color: '#3499AA',
    fontSize: height * .04,
    fontWeight: 'bold',
    marginLeft: width * .02
  },
  genericName: {
    color: '#212B31',
    fontSize: height * .03,
    marginLeft: width * .02
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
    width: width * .85,
    marginBottom: height * .05
  },
});
