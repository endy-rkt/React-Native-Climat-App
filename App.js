import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import Home from './Components/Home';
import About from './Components/About';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



const Drawer=createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="About" component={About}/>
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


