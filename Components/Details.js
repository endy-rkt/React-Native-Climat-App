import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

const Details = ({min,max,pressure,humidity}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Details</Text>
        <View style={styles.content}>
            <View style={styles.itemContent}>
                <Text style={styles.itemText}>Min: {min} °C</Text>
                <Text style={styles.itemText}>Max: {max} °C</Text>
            </View>
            <View style={styles.itemContent}>
                <Text style={styles.itemText}>Pressure: {pressure} hPa</Text>
                <Text style={styles.itemText}>Humidity: {humidity} %</Text>
            </View>
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
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        width:'90%',
        marginHorizontal:25,
    },
    itemText:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    }
})
export default Details