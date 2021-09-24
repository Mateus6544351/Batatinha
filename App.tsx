import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Image source={require("./src/assets/arrow-left.png")}></Image>
        <Image source={require("./src/assets/ei_search.png")}></Image>
        <Image source={require("./src/assets/share.png")}></Image>

      </View>
      <Text>OI</Text>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },

  header: {
      minHeight: 93,
      backgroundColor: "#4369B0",
      paddingTop: 40,

  }
});
