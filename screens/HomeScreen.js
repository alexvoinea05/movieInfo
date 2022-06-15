import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,FlatList, Image, ScrollView } from 'react-native'
import { auth } from '../firebase'
import { Card} from "react-native-paper";

const HomeScreen = () => {

  const [isLoading, setLoading] = useState(true);

  const [data, setData] =useState({});

  let count = 0;

  // useEffect(() => {
  //    fetch('https://simple-books-api.glitch.me/books?type=fiction')
  //       .then((response) => response.json())
  //       .then((responsejson) => {setData(responsejson);
  //         console.log(responsejson);
  //       })
  //       .catch((error) => alert('aaaaa',error))
  //       .finally(() => setLoading(false));


  //       }, [count]);

  const fetch = require('node-fetch');

const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/Godfather?info=mini_info&limit=9&page=1&titleType=movie';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '70950fcc34mshaf5b8e8acef118ap190b6djsn3bf236cfb5a1',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

useEffect(() => {
fetch(url, options)
	.then(res => res.json())
	.then(json => {console.log(json.results),
    setData(json.results)})
	.catch(err => console.error('error:' + err))
  .finally(() => setLoading(false));
  }, [count]);

  const navigation = useNavigation()

  state = {
      isLoading: true,
      dataSource: null,
    }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

return (
      <View style={styles.container}>
        {isLoading ? (
        <><Text>Email: {auth.currentUser?.email}</Text><TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity></>) : (
          <><FlatList 
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Movie', {
              item: item

            })}>
            <Card style ={{padding:10, margin:10, backgroundColor: "#eddfdf"}}>
                <Card.Content>
            <><Text>
              {item.titleText.text ? item.titleText.text : 'N\A'}
            </Text>
            <Image
          style= {{flex:1 , width: 40, height: 40}} 
          source={item.primaryImage
            ? {uri: item.primaryImage.url}                      
            : {uri:'https://m.media-amazon.com/images/M/MV5BMDMxMDIzMWYtY2NkNi00YzYwLWIzMTQtYTQwOGJjMmY1ZmJhXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg'}}
      />
      
            </>
            </Card.Content>
      </Card>
      </TouchableOpacity>
          )} /><TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity></>  
        )}
      </View>
);
          };

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
