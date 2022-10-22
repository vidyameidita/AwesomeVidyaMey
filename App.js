import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './navigasi/About';
import Home from './navigasi/Home';
import Vidya from './navigasi/Vidya';
import Profile from './navigasi/Profile';
import Setting from './navigasi/Setting';
import Default from './navigasi/Default';

function HomeScreen() {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Vidya" component={Vidya}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="Default" component={Default}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;