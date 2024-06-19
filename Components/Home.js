import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Alert} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Middle from './Middle';
import Bottom from './Bottom';
import { useState ,useEffect} from 'react';
import axios, { AxiosError } from 'axios';
import {MaterialIcons} from '@expo/vector-icons'


export default function Home({navigation}) {
  //Initialize all variable to set in the app
  const [title,setTitle]=useState('--')
  const [icon,setIcon]=useState('01d')
  const [temp,setTemp]=useState('--')
  const [description,setdescription]=useState("What is the weather today?")
  const [min,setMin]=useState('--')
  const [max,setMax]=useState('--')
  const [pressure,setPressure]=useState('--')
  const [humidity,setHumidity]=useState('--')
  const [sunrise,setSunrise]=useState('--')
  const [sunset, setSunset]=useState('--')
  const [speed,setSpeed]=useState('--')
  const [ville,setVille]=useState("");
  const cleAPI = '4c14c733633db8e0cc1d445451c6b9a8';

  //function to navigate to the drawer
  const openMenu=()=>navigation.openDrawer();

  //function timestamp to localeTImeString for the sunset and sunrise
  const toDate=(timestamp)=>{
    const date = new Date(timestamp*1000);
    return (date.toLocaleString());
  }

  //change all the state of variable
  const launch=(title,icon,temp,description,min,max,pressure,humidity,sunrise,sunset,speed)=>{
    setTitle(title)
    setIcon(icon)
    setTemp(temp)
    setdescription(description)
    setMin(min)
    setMax(max)
    setPressure(pressure)
    setHumidity(humidity)
    setSpeed(speed)
    setSunrise(toDate(sunrise))
    setSunset(toDate(sunset))
  }

  //get data though api when searchButton pressed
  const searchPressed=()=>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${cleAPI}&units=metric`;
    if(ville!=null && ville!=""){   
        axios.get(url)
            .then(response => {
                const data=response.data
                launch(data.name,data.weather[0].icon,data.main.temp,data.weather[0].description,data.main.temp_min,
                        data.main.temp_max,data.main.pressure,data.main.humidity,data.sys.sunrise,data.sys.sunset,data.wind.speed
                );
                console.log(data)
            })
            .catch(error => {
            console.log(error);
            if(error.request){
              Alert.alert(
                'Error !',
                "A connection error occurred. Check your Internet connection and try again.",
                [{text:'Ok',onPress:()=>('alert closed')}]
              )
            }
            });
    }
    else{
      console.log("Entrée vide")  
      Alert.alert('Void entry !','The entry must be a town name.',[
        {text:'OK',onPress:()=>console.log('alert closed')}
      ])
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <MaterialIcons
        name='list'
        size={35}
        color='#fff'
        onPress={openMenu}
        />
        <TextInput
            style={styles.textInput}
            placeholder='Enter the town...'
            color='#fff'
            fontSize={20}
            fontWeight='bold'
            onChangeText={val=>setVille(val)}
        />
        <MaterialIcons
        name='search'
        size={35}
        color='#fff'
        onPress={searchPressed}
        />
    </View>
      <Middle icon={icon} temp={temp} description={description}/>
      <Bottom style={styles.bottom} min={min} max={max} pressure={pressure} humidity={humidity} sunrise={sunrise} sunset={sunset} speed={speed}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'skyblue'
  },
  headContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:40,
    marginLeft:10,
    marginRight:10,
},
});
