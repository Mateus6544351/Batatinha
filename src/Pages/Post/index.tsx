import React from 'react';
import {View, Text , StyleSheet, Image} from 'react-native';

const Post = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.headerPost}>
                <View style={styles.foto}>

                </View>
                <View style={styles.textos}>
                    <Text style={styles.textoPost}>Meu Post</Text>
                    <View style={styles.tempoPostagem}>
                        <Text>2hrs</Text>
                        <Image style={styles.imagem}  source={require('../../assets/globo.png')}/>
                    </View>

                </View>
            </View>
        </View>
    );
}
export default Post;

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'red',
        padding:30,
    },
    headerPost:{
        flexDirection:'row',
    },
    foto:{
        width:60,
        height:60,
        backgroundColor:'#4369B0',
        borderRadius:50,
    },
    textos:{
        paddingLeft:20,
        justifyContent:'space-around',
    },
    tempoPostagem:{
        flexDirection:'row',
    },
    textoPost:{
        fontWeight:'bold',
        fontSize:18,
    },
    imagem:{
        marginLeft:6,
    },
});