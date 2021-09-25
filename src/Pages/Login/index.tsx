import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableWithoutFeedbackBase} from 'react-native';

const Login = () => {
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
            </View>
            <Text>Login</Text>
        </View>
    );
    
}
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: "#3b5998",
        paddingTop: 250,
        },

        logo: {
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 45,
        fontFamily: "Roboto",
        height: 100,
        },

        login: {
        marginTop: 10,
        marginHorizontal: 50,
        flexDirection: "column",
        justifyContent: "center",
        },
        TextInput: {
            color: "black",
            //maxWidth: 200,
            flex: 1,
            marginHorizontal: 29,
            paddingRight: 10,
            paddingLeft: 15,
            fontSize: 16,
            backgroundColor: "white",
            height: 48,
            },

        inputTextView: {
            marginTop: 30,
            alignItems: "center",
            flexDirection: 'row',
        },

    });
export default Login;