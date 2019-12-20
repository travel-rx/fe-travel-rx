import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default function Header() {

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.text}>TravelRx</Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#3499AA',
    flex: 0

  },
  text: {
    color: '#fff',
    fontSize: 40
  }
})
