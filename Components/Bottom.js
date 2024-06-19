import React from 'react'
import { TextInput,StyleSheet ,View,Text} from 'react-native'
import Details from './Details'
import Sun from './Sun'
import Wind from './Wind'

const Bottom = ({min,max,pressure,humidity,sunrise,sunset,speed}) => {
  return (
    <View style={styles.container}>
         <Details style={styles.content} min={min} max={max} pressure={pressure} humidity={humidity}/>
         <Sun style={styles.content} sunrise={sunrise} sunset={sunset}/>
         <Wind style={styles.content} speed={speed}/>
    </View>
  )
}

const styles=StyleSheet.create({
    content:{
      marginTop:10,
      backgroundColor:"crimson"
    }
})
export default Bottom