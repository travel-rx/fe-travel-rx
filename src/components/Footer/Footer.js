import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default class Footer extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigate('Home')}
        >
        <AntDesign name='home' size={45} color='#EBEBEB' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('MedicineCabinet')}
      >
        <AntDesign name='medicinebox' size={45} color='#EBEBEB' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('EmergencyTranslations')}
      >
        <MaterialIcons name='translate' size={45} color='#EBEBEB' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('About')}
      >
        <AntDesign name='questioncircleo' size={45} color='#EBEBEB' />
      </TouchableOpacity>
    </View>
  )
}
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3499AA',
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center'

  }
});