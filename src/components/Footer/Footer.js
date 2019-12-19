import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function Footer() {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
      >
        <AntDesign name='home' size={45} color='#EBEBEB' />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name='medicinebox' size={45} color='#EBEBEB' />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name='plane' size={45} color='#EBEBEB' />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name='questioncircleo' size={45} color='#EBEBEB' />
      </TouchableOpacity>
    </View>
  )
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