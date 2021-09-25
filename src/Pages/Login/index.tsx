import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { StackNavigatorParamList } from "../../../types";

type LoginProps = NativeStackNavigationProp<StackNavigatorParamList,"Login">;

const Login = () => {

    const navigation = useNavigation<LoginProps>();

    function irParaTelaHome(){
        navigation.navigate('Home');
      }

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../assets/facebook.png")}></Image>
                <Text style={{fontSize: 42, fontFamily: "Roboto", color: "#FFFFFF",}}>Facebook</Text>
            </View>
            <View style={styles.login}>
            <View style={styles.inputTextView} >
                <TextInput placeholder="Email" placeholderTextColor="#A19FA1" style={styles.TextInput}/>
            </View>
            <View style={styles.inputTextView} >
                <TextInput placeholder="Senha" placeholderTextColor="#A19FA1" style={styles.TextInput}/>
            </View>
            <View style={styles.inputTextView} >
                <TouchableOpacity style={styles.meubotao} onPress={irParaTelaHome}>
                    <Text style={styles.meubotaoTexto}>Log in</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={{alignItems: "center",}}>
                <Text style={{color: "white",marginTop: 50,}}>Sign Up for FaceBook</Text>
            </View>
        </View>
        
       
    );
    
}
    
export default Login;