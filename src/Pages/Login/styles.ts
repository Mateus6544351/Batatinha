import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

meubotao:{
    flex: 1,
    backgroundColor:"#4369B0",
    height:40,
    alignItems:"center",
    justifyContent:'center',
    marginHorizontal:30,
    borderRadius:5,

},

meubotaoTexto:{
    color:"#F5FFFF",
},

    container: {
    flex: 1,
    backgroundColor: "#3b5998",
    
    justifyContent: "center",
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