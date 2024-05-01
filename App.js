import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './Screens/HomeScreen';
import Profilescreen from './Screens/Profile';
import { Pressable, Text} from 'react-native';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer> 
     <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Homescreen} options={{
        title:"Welcome to Home",
        headerStyle:{
          backgroundColor:"#6a51ae"
        },
        headerTintColor:"#fff",
        headerTitleStyle:{fontWeight:'bold'},
        headerRight:()=>(
          <Pressable onPress={()=>alert("Menu Button pressed")} >
            <Text style={{color:"#fff", fontSize:16}} >Menu</Text>
          </Pressable>
        )
        
        
      }} />
       
      <Stack.Screen name="Profile" component={Profilescreen} options={{
        title:"Welcome to Profile",
        headerStyle:{
          backgroundColor:"#6a51ae"
        },
        headerTintColor:"#fff",
        headerTitleStyle:{fontWeight:'bold'},
        headerLeft:()=>(
          <Pressable onPress={()=>alert("Menu Button pressed")} >
            <Text style={{color:"#fff", fontSize:16}} >Menu</Text>
          </Pressable>
        )
        
        
      }}  />
       
    </Stack.Navigator>
    </NavigationContainer>
  );
}