import React,{useState} from 'react'
import { Text,TextInput,StyleSheet ,View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
       <MaterialIcons
        name='arrow-back'
        size={30}
        color='black'
        onPress={()=>navigation.goBack()}
        />
      <Text style={styles.headText}>About</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.bodyText}>
      Stay informed about weather conditions in real time with our weather app. 
        
      </Text>
      <Text style={styles.bodyText}> 
      Get accurate and reliable forecasts for your current location and for thousands of other places in the world.   
      </Text>
      <Text style={styles.bodyText}> 
      Check the weather forecast, temperature, wind speed and more. 
      </Text>
      <View style={styles.endText}> 
        <Text style={styles.eText}>For any problems, please send us an e-mail to</Text>
            <View style={styles.bottomText}>
              <Text style={styles.eText}>endytolojanahary@gmail.com</Text>
              <Text style={styles.eText}>ramarosonnasolo15@gmail.com</Text>
              <Text style={styles.eText}>Copyright &copy; 1dyRakoto 2023.</Text> 
            </View>
      </View>
    
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  headContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    alignContent:'center',
    marginTop:40,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#eee',
    height:50,
    borderRadius:10
},
  headText:{
    marginLeft:100,
    fontSize:20
  },
  body:{
    justifyContent:'space-evenly',
    marginHorizontal:30,
    marginVertical:20
  },
  bodyText:{
    fontSize:17
  },
  endText:{
    flexDirection:'column',
    marginTop:300,
    
  },
  eText:{
    color:'#aaa',
    width:500
  },
  bottomText:{
    justifyContent:'center',
    marginHorizontal:55
  }
})
export default About