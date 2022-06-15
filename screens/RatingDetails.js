import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,FlatList, Image, ScrollView } from 'react-native'
import { auth } from '../firebase'
import { Card} from "react-native-paper";
import MovieDetails from './MovieDetails';

export default function RatingDetails({navigation, route}) {

    console.log(route.params.item.id)
  const param = route.params.item.id;
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

const url = `https://moviesdatabase.p.rapidapi.com/titles/${param}/ratings`;

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
    
    
      state = {
          isLoading: true,
          dataSource: null,
        }

return (
      <View style={styles.container}>
         
          <>
            
            <Text> Rating:
              {data ? data.averageRating : 0}
            </Text>
            <Text> Number of votes:
                {data ? data.numVotes : 0}
            </Text>
      
            
           </>  
        
      </View>
);
          };

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
