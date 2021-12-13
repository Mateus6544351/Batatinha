import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

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

export default function App() {
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
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.header_icon}>
            <View style={styles.header_icon2}>
              <View style={styles.espaco}>
                <Image
                  source={require('../../assets/arrow.png')}
                  style={styles.imagens}
                />
              </View>
              <View style={styles.espaco2}>
                <Text style={styles.nome}>
                  Zezinho{' '}
                  <Image
                    source={require('../../assets/arrow2.png')}
                    style={styles.imagens2}
                  />
                </Text>
              </View>
            </View>
            <View style={styles.header_icon2}>
              <View style={styles.espaco3}>
                <Image
                  source={require('../../assets/video.png')}
                  style={styles.imagens3}
                />
              </View>
              <View style={styles.espaco}>
                <Image
                  source={require('../../assets/editing.png')}
                  style={styles.imagens}
                />
              </View>
            </View>
          </View>
          <View style={styles.abas}>
            <View style={styles.abas_text}>
              <Text style={styles.abas_text_sele}>Bate-Papos</Text>
            </View>
            <View style={styles.abas_text}>
              <Text style={styles.abas_text}>Ligações</Text>
            </View>
            <View style={styles.abas_text}>
              <Text style={styles.abas_text}>Solicitações</Text>
            </View>
          </View>
        </View>

        <View style={styles.inputTextView}>
          <Image
            source={require('../../assets/search.png')}
            style={styles.imagens5}></Image>
          <TextInput
            placeholder="Search"
            placeholderTextColor="lightgray"
            style={styles.textInput}></TextInput>
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
    paddingRight: 20,
  },
  espaco3: {
    padding: 5,
    paddingLeft: 80,
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
    borderTopWidth: 0,
    borderRightWidth: 0,
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
});
