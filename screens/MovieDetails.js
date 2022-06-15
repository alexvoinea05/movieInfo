import React from 'react'
import { Animated, StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native'
import { Card} from "react-native-paper";
import { useNavigation } from '@react-navigation/native'

export default function MovieDetails({navigation, route}) {
    const data = route.params;
    const animatedButtonScale = new Animated.Value(1);
    console.log(data);
    const nav = useNavigation();
    //console.log(data.item.primaryImage.url)

    const onPressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1.5,
            useNativeDriver: true,
        }).start();
    };

    const animatedScaleStyle = {
        transform: [{scale: animatedButtonScale}]
    };


    // When button is pressed out, animate the scale back to 1
    const onPressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style>
            <TouchableOpacity onPress={() => nav.navigate('Rating', {
              item: data.item
              

            })}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
        >
            <Animated.View style={[styles.iconContainer, animatedScaleStyle]}>
            <Card style ={{padding:10, margin:100, width: 200, height:200,  backgroundColor: "#eddfdf"}}>
                <Card.Content>
            <><Text> Name: 
              {data.item.titleText.text ? data.item.titleText.text : 'N\A'}
            </Text>
            <Image
          style= {{ width: 40, height: 40}} 
          source={data.item.primaryImage
            ? {uri: data.item.primaryImage.url}                      
            : {uri:'https://m.media-amazon.com/images/M/MV5BMDMxMDIzMWYtY2NkNi00YzYwLWIzMTQtYTQwOGJjMmY1ZmJhXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg'}}
      />

            <Text> Release year: 
              {data.item.releaseDate ? data.item.releaseDate.year : 'N\A'}
            </Text>
      
            </>
            </Card.Content>
      </Card>
      </Animated.View>
      </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%'
      
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
  