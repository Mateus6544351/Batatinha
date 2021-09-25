import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Home from './src/Pages/Home';
import Routes from './src/routes';


export default function App() {
  return (
      <View style={{flex: 1}}>
      <Routes />
      </View>
  );
}

