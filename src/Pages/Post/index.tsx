import React from 'react';
import {View, Text , StyleSheet, Image , TouchableOpacity} from 'react-native';

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
            <View style={styles.textoPostPublicado}>
                <Text style={styles.textoPostPublicadoTexto}>Este é o design que vamos replicar hoje na aula:  
                    <Text style={styles.textoPostPublicadoLink}>
                        https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup
                    </Text>
                </Text>
                <Image style={styles.imagemPost}  source={require('../../assets/post.png')}></Image>
            </View>

            <View style={styles.likes}>
                <Image source={require('../../assets/likes.png')}/>
                <Text style={styles.likesTexto}>12</Text>
            </View>

            <View style={styles.linksShare}>
                <View style={styles.linksShareBloco}>
                    <Image source={require('../../assets/like.png')}/>
                    <Text style={styles.likesTexto}>Like</Text>
                </View>
                <View style={styles.linksShareBloco}>
                    <Image style={styles.linksShareBlocoIcone} source={require('../../assets/comentario.png')}/>
                    <Text style={styles.likesTexto}>Comentários</Text>
                </View>
                <View style={styles.linksShareBloco}>
                    <Image style={styles.linksShareBlocoIcone} source={require('../../assets/share1.png')}/>
                    <Text style={styles.likesTexto}>Compartilhar</Text>
                </View>

            </View>

            <View style={styles.footerPost}>
                <TouchableOpacity style={styles.btnLearMore}>
                    <Text style={styles.btnLearMoreText}> Learn More</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMensagem}>
                    <Image style={{width:16,height:16}} source={require('../../assets/btnmensagem.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn3Pontos}>
                    <Image style={{height:3,width:16}}  source={require('../../assets/3pontos.png')}/>
                </TouchableOpacity>

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
    textoPostPublicado:{
        marginTop:10,
        fontSize:18,
    },
    textoPostPublicadoLink:{
        color:'#4D6196',
        fontSize:15,
    },
    textoPostPublicadoTexto:{
        fontSize:15,
    },
    imagemPost:{
        height:282,
        width:358,
    },
    likes:{
        marginTop:30,
        flexDirection:'row',
        alignContent:'center',
    },
    likesTexto:{
        marginLeft:10,
        textAlignVertical:'center',
    },
    linksShare:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:20,
    },
    linksShareBloco:{
        flexDirection:'row',
        justifyContent:'center',
    },
    linksShareBlocoIcone:{
        width:18,
        height:18,
    },
    footerPost:{
        height:43,
        flexDirection:'row',

    },
    btnLearMore:{
        flex:8,
        backgroundColor:'#3D7BE2',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    btnMensagem:{
        flex:2,
        marginLeft:10,
        backgroundColor:'#3D7BE2',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    btn3Pontos:{
        flex: 2,
        marginLeft:10,
        borderWidth:2,
        borderColor:'#3D7BE2',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',

    },
    btnLearMoreText:{
        color:"#FDF7FD",
        fontSize:16,
    },
});