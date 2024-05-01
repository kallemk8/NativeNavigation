import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './Screens/HomeScreen';
import Profilescreen from './Screens/Profile';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer> 
     <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name="Home" component={Homescreen} />
       
      <Stack.Screen name="Profile" component={Profilescreen} />
       
    </Stack.Navigator>
    </NavigationContainer>
  );
}