import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './App/Screens/HomeScreen';
import Register from './App/Screens/Register';
import Dashboard from './App/Screens/Dashboard';
import ClassIX from './App/Screens/ClassIX';
import ClassX from './App/Screens/ClassX';
import Teachers from './App/Screens/Teachers';
import Login from './App/Screens/Login';
import AccountScreen from './App/Screens/AccountScreen';


const Stack = createNativeStackNavigator();


const App = () => {

  return (
   
    <NavigationContainer>
       
       {<Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
       <Stack.Screen name='Login' component={Login}></Stack.Screen>
       <Stack.Screen name='AccountScreen' component={AccountScreen}></Stack.Screen>
        <Stack.Screen name='Dashboard' component={Dashboard}></Stack.Screen>
        <Stack.Screen name='ClassIX' component={ClassIX}></Stack.Screen>
        <Stack.Screen name='ClassX' component={ClassX}></Stack.Screen>
        <Stack.Screen name='Teachers' component={Teachers}></Stack.Screen>
     </Stack.Navigator>}
     </NavigationContainer>
  );
  
  }
export default App;
