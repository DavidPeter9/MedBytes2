import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import med_logo from './assets/Med_logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={med_logo} />
      <View style={styles.titleCnt}><Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title}>MedBytes</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F2FF',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  logo:{
    width: 160, height: 180, marginTop: 200
  },
  titleCnt:{
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 30,
  },
  title: {
    color: '#054588',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
