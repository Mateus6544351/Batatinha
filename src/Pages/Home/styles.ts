import { StyleSheet } from 'react-native';

export  const stylesLink = StyleSheet.create({
    text: {
      //backgroundColor: "red",
      marginTop: 10,
      color: "#4A4A4C",
      fontSize: 13.71,
  
    }

  });

  export const stylesLinkImportantes = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 40,
      paddingVertical: 10,
      
      borderBottomColor: "red",
      borderBottomWidth: 1,
  
    }
  });

  export const styles = StyleSheet.create({
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

    meubotao:{
        backgroundColor:"#4369B0",
        height:40,
        alignItems:"center",
        justifyContent:'center',
        marginHorizontal:40,
        borderRadius:10,

    },
    conteudoFacebook:{
        flex:1,
        // backgroundColor:"#F0F500",
        justifyContent:'flex-end',
        paddingVertical:40,
    },

    meubotaoTexto:{
        color:"#F5FFFF",
    },
});
  
  
