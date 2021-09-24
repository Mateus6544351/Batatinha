import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const LinksImportantes = ()=>{
  return(
    <View>
      <Text>Componente</Text> 
    </View>);// bla bla bla
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Image source={require("./src/assets/arrow-left.png")}></Image>
        <View style={styles.inputTextView} >
          <Image source={require("./src/assets/ei_search.png")}></Image>
          <TextInput placeholder="Search" placeholderTextColor="#F5FFFF" style={styles.TextInput}>
            
          </TextInput>
        </View>
        <Image source={require("./src/assets/share.png")}></Image>

      </View>
      <Text>OI</Text>
      <Text>Hello world</Text>
      <LinksImportantes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
      minHeight: 93,
      backgroundColor: "#4369B0",
      paddingTop: 40,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 30,
  },

  inputTextView: {
    flex: 3,
    backgroundColor: "#2C4877",
    height: 40,
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 28,
    flexDirection: 'row',
  },
  TextInput: {
    color: "#F5FFFF",
    //maxWidth: 200,
    flex: 1,
    paddingRight: 10,
  },
});
