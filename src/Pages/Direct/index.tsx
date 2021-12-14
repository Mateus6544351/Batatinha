import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNavigatorParamList } from "../../../types";
import {useNavigation} from '@react-navigation/native';

type LoginProps = NativeStackNavigationProp<StackNavigatorParamList,"Login">;

const dados = [
  {
    id: 1,
    nome: 'juliano',
    foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    u_online: '1',
  },
  {
    id: 2,
    nome: 'clone-juliano',
    foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    u_online: '3',
  },
  {
    id: 3,
    nome: 'clone-juliano-2',
    foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    u_online: '4',
  },
  {
    id: 4,
    nome: 'clone-juliano-2',
    foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    u_online: '4',
  },
  {
    id: 5,
    nome: 'clone-juliano-2',
    foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    u_online: '2',
    camera: '../../assets/camera.png',
  },
];

const DATA = [
  {
    id: 1,
    nome: 'Zezinho',
    foto: 'https://lh4.googleusercontent.com/8liHFNt8hJYW514M-FjLzQTnRyzsV3wZLVWTQvWgxP4c9lNx2nVSUFFiAbzEZFKJE2_ILwL4T7LyxeseHBmOU5Q=w1280',
  },
  {
    id: 2,
    nome: '',
    foto: 'https://lh6.googleusercontent.com/6pe8T6Jx2-yP5yng9wEBSTyWuWlCZgQu7WTlP9WrduKmQFrohNqXRudBM8Xh_nDJGwg7sSxlPXesh3BTISPWfhQ=w1280',
  },
  {
    id: 3,
    nome: '',
    foto: 'https://lh4.googleusercontent.com/_wPVZMUUtOc8-ckbM8_HoKkglKE0BLL1Q6jzNXlRXYkswnSgrO-yVhZp2QcligRR35wwgTjtP8RqvVKjTOoqA9g=w1280',
  },
];

const DATA2 = [
  {
    id: 1,
    nome: 'Bate-Papo',
  },
  {
    id: 1,
    nome: 'Ligações',
  },
  {
    id: 1,
    nome: 'Solicitações',
    
  },
];

export default function App() {

  const navigation = useNavigation<LoginProps>();

    function irParaTelaHome(){
        navigation.navigate('Login');
      }

  const renderItemAgenda = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.item2}>
          <Image
            style={styles.containerFlatListImage}
            source={{ uri: item.foto }}
          />
          <View>
            <Text style={styles.text_nome}>{item.nome}</Text>
            <Text style={styles.text_item}>Online há {item.u_online} h</Text>
          </View>
        </View>
        <Image
          source={require('../../assets/camera.png')}
          style={styles.imagens4}
        />
      </View>
    );
  };
  
  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={styles.FlatList2}>
          <Text style={styles.flatText}>{item.nome}<Image
            style={styles.FlatListImage}
            source={{ uri: item.foto }}
          /></Text>
          
          </View>
      </View>
    );
  };

  const renderItem2 = ({ item, onPress }) => {
    return (
      <View>
        <View>
            <TouchableOpacity onPress={onPress} style={[styles.item]}>
              <Text style={[styles.flatText2]}>{item.nome}</Text>
            </TouchableOpacity>
          
          </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={styles.FlatList1}>
        <TouchableOpacity onPress={irParaTelaHome}>
        <Image 
            style={styles.botao_voltar}
            source={{ uri: "https://lh5.googleusercontent.com/CNgzJPG3Ssk301DIy_jBgQy165V_P2f6cgykQv6JmFKFl3JHvMLeXAC6tDEPZIlggxabNQ6Jyt-1vlnlfK-Bfjg=w1280" }}
          />
        </TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          //alignContent: 'center',
          //backgroundColor:"red",  
      }}
      />
        </View>
        <View>
        <FlatList
          data={DATA2}
          renderItem={renderItem2}
          keyExtractor={(item) => item.id}
          horizontal={true}
          contentContainerStyle={{
            flexDirection: 'row',
            //flexWrap: 'nowrap',
            justifyContent: 'space-between',
            //backgroundColor:"red",  
          }}
        />
        </View>
        <FlatList
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={renderItemAgenda}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
  },
  containerFlatListImage: {
    height: 50,
    width: 50,
    //backgroundColor:'blue',
    borderRadius: 50,
    marginRight: 5,
  },
  botao_voltar: {
    height: 25,
    width: 25,
    marginTop: 10,
    marginRight: 20,
    //backgroundColor:'blue',
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#e5e5e5',
    marginTop: 10,
    padding: 5,
    borderWidth: 2,
    //borderColor: 'gray',
    //borderRadius: 5,
    justifyContent: 'space-between',
  },
  item2: {
    flex: 1,
    flexDirection: 'row',
  },
  text_item: {
    color: 'gray',
  },
  text_nome: {
    fontSize: 18,
    color: 'white',
  },
  header: {
    //backgroundColor:'red',
  },
  imagens: {
    width: 25,
    height: 25,
  },
  imagens2: {
    width: 10,
    height: 10,
  },
  imagens3: {
    width: 30,
    height: 30,
  },
  imagens4: {
    width: 30,
    height: 30,
    marginTop: 9,
    marginRight: 7,
  },
  imagens5: {
    width: 15,
    height: 15,
    marginLeft: 3,
  },
  nome: {
    color: 'white',
    fontSize: 20,
    fontWeight: "700",
  },
  header_icon: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent:"space-between",
    //backgroundColor: 'blue',
  },
  header_icon2: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  espaco: {
    padding: 5,
  },
  espaco2: {
    padding: 5,
    paddingRight: 40,
  },
  espaco3: {
    padding: 5,
    paddingLeft: 100,
  },
  abas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
  },
  abas_text: {
    color: 'white',
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 5,
  },
  abas_text_sele: {
    paddingHorizontal: 5,
    color: 'white',
    fontSize: 18,
    fontWeight: "600",
    borderColor: 'white',
    borderWidth: 3,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  textInput: {
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 20,
    fontSize: 15,
    color: 'lightgray',
  },
  inputTextView: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4a4a4a',
    paddingLeft: 15,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5,
    height: 25,
  },
  FlatListImage: {
    height: 25,
    width: 25,
    //backgroundColor:'blue',
    
  },
  FlatList1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  flatText: {
    paddingTop:1,
    fontSize:20,
    color: "white",
    height: 40,
    maxWidth:100,
    flexDirection: 'row',
    marginRight: 50,
    justifyContent: 'space-between',
    fontWeight: "bold",
  },
  FlatList2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  flatText2: {
    paddingTop:1,
    fontSize:20,
    color: "white",
    height: 40,
    maxWidth:150,
    flexDirection: 'row',
    marginRight: 25,
    justifyContent: 'space-between',
    fontWeight: "bold",
  },
  Item: {
    paddingTop:1,
    fontSize:20,
    color: "white",
    height: 40,
    maxWidth:150,
    flexDirection: 'row',
    marginRight: 43,
    justifyContent: 'space-between',
    fontWeight: "bold",
    borderTopColor: "white",
    borderTopWidth: 5,
  },
});
