import React, { useState } from 'react'
import { TextInput,StyleSheet ,View,Text,Image} from 'react-native'

const Middle = ({icon,temp,description}) => {
  let mIcon=(<Image source={require(`../assets/weatherIcon/01d.png`)} style={styles.iconItem}/>);
  
  //changing the icon image depending on the weather
  if (icon==='01d'){mIcon=(<Image source={require(`../assets/weatherIcon/01d.png`)} style={styles.iconItem}/>)}
  else if(icon==='01n'){mIcon=(<Image source={require(`../assets/weatherIcon/01n.png`)} style={styles.iconItem}/>)}
  else if(icon==='02d'){mIcon=(<Image source={require(`../assets/weatherIcon/02d.png`)} style={styles.iconItem}/>)}
  else if(icon==='02n'){mIcon=(<Image source={require(`../assets/weatherIcon/02n.png`)} style={styles.iconItem}/>)}
  else if(icon==='03d'){mIcon=(<Image source={require(`../assets/weatherIcon/03d.png`)} style={styles.iconItem}/>)}
  else if(icon==='03n'){mIcon=(<Image source={require(`../assets/weatherIcon/03n.png`)} style={styles.iconItem}/>)}
  else if(icon==='04d'){mIcon=(<Image source={require(`../assets/weatherIcon/04d.png`)} style={styles.iconItem}/>)}
  else if(icon==='04n'){mIcon=(<Image source={require(`../assets/weatherIcon/04n.png`)} style={styles.iconItem}/>)}
  else if(icon==='09d'){mIcon=(<Image source={require(`../assets/weatherIcon/09d.png`)} style={styles.iconItem}/>)}
  else if(icon==='09n'){mIcon=(<Image source={require(`../assets/weatherIcon/09n.png`)} style={styles.iconItem}/>)}
  else if(icon==='10d'){mIcon=(<Image source={require(`../assets/weatherIcon/10d.png`)} style={styles.iconItem}/>)}
  else if(icon==='10n'){mIcon=(<Image source={require(`../assets/weatherIcon/10n.png`)} style={styles.iconItem}/>)}
  else if(icon==='11d'){mIcon=(<Image source={require(`../assets/weatherIcon/11d.png`)} style={styles.iconItem}/>)}
  else if(icon==='11n'){mIcon=(<Image source={require(`../assets/weatherIcon/11n.png`)} style={styles.iconItem}/>)}
  else if(icon==='13d'){mIcon=(<Image source={require(`../assets/weatherIcon/13d.png`)} style={styles.iconItem}/>)}
  else if(icon==='13n'){mIcon=(<Image source={require(`../assets/weatherIcon/13n.png`)} style={styles.iconItem}/>)}
  else if(icon==='50d'){mIcon=(<Image source={require(`../assets/weatherIcon/50d.png`)} style={styles.iconItem}/>)}
  else {mIcon=(<Image source={require(`../assets/weatherIcon/50n.png`)} style={styles.iconItem}/>)}

  return (
    <View style={styles.container}>
        {mIcon}      
        <Text style={styles.tempItem}>{temp} °C</Text>
        <Text style={styles.descriptionItem}>{description}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconItem:{
      marginTop:20,
      width:150,
    },
    tempItem:{
      fontSize:50,
      color:'yellow',
    },
    descriptionItem:{
      fontSize:25,
      color:'#fff',
      fontWeight:'bold',
      marginTop:15,
      marginBottom:20
    }
})
export default Middle