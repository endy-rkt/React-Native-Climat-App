import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

const Wind = ({speed}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Wind</Text>
        <View style={styles.content}>
            <Text style={styles.itemText}>Speed: {speed} m/s</Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    title:{
        justifyContent:'flex-start',
        borderBottomColor:'black',
        borderBottomWidth:3,
        borderBottomColor:'yellow',
        width:'90%',
        marginHorizontal:25,
        marginTop:20,
        color:'yellow',
        fontWeight:'bold',
        fontSize:25
    },
    content:{
        width:'90%',
        marginHorizontal:25
    },
    itemText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:17
    }
})
export default Wind