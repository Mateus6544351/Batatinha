import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';

import { stylesLink } from "./styles";

const LinkItem = (props: any)=>{
    return(
      <Text style={stylesLink.text}>{props.name}</Text> 
    );
  };
 
  const stylesLinkImportantes = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 40,
      paddingVertical: 10,
      
      borderBottomColor: "red",
      borderBottomWidth: 1,
  
    }
  });
  
  const LinksImportantes = ()=>{
    return(
      <View style={stylesLinkImportantes.container}>
        <LinkItem name = "Home"/>
        <LinkItem name = "Post"/>
        <LinkItem name = "Videos"/>
        <LinkItem name = "Photos"/>
        <LinkItem name = "Community"/>
  
      </View>);// bla bla bla
  };

const Home = () => {
    return(
        <View style={styles.container}>
      <View style={styles.header}>
        
        <Image source={require("../../assets/arrow-left.png")}></Image>
        <View style={styles.inputTextView} >
          <Image source={require("../../assets/ei_search.png")}></Image>
          <TextInput placeholder="Search" placeholderTextColor="#F5FFFF" style={styles.TextInput}>
            
          </TextInput>
        </View>
        <Image source={require("../../assets/share.png")}></Image>

      </View>
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
  
export default Home;