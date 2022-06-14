import React from 'react';
import { View ,StyleSheet, Text, TouchableOpacity, ImageBackground,StatusBar } from 'react-native';
import colors from '../Assets/config/colors';
import AppButton from '../Components/AppButton';
import AppButton1 from '../Components/AppButton1';
import  BackIcon  from 'react-native-vector-icons/AntDesign';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import AppButton2 from '../Components/AppButton2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function Dashboard({navigation}) {
    return (
    <View>
    <ImageBackground style={styles.backimg}
        source={require('../Assets/config/back.jpg')}>
          <StatusBar
         backgroundColor="#f4f4f4"
         barStyle="light-content"/>
          <View style={styles.container1}>
         
         <TouchableOpacity>
          <BackIcon style={styles.Icon} 
                 size={40}
                 name='bars'/>
       </TouchableOpacity>
            <Text style={styles.Dashboard}>
                HOME
            </Text>
          </View>
          <TouchableOpacity onPress={()=>  navigation.navigate('Login')}>
          <Icon style={styles.Icon1} 
                 size={40}
                 name='logout'/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btn} onPress={()=>  navigation.navigate('ClassIX')}>
       <Text style={styles.buttontext}>
         Class IX
       </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn2} onPress={()=>  navigation.navigate('ClassX')}>
       <Text style={styles.buttontext}>
         Class X
       </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn3} onPress={()=>  navigation.navigate('Teachers')}>
       <Text style={styles.buttontext}>
         Teachers
       </Text>
     </TouchableOpacity>
    </ImageBackground>
    </View>
       
       
    );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    container1:{
        width:400,
        height:70,
        marginTop:15,
        marginBottom:20,
        marginLeft:5,
        borderRadius:10,
        backgroundColor:'#3333cc',
        elevation:5,
        alignItems:'center',
        justifyContent:'center',
    },
    backimg:{
        width:'100%',
        height:'100%',
    },
    Icon:{
        color:colors.white,
        marginTop:2,
        marginRight:340,
    },
    Icon1:{
      color:colors.white,
      marginTop:-75,
      marginLeft:355,
  },
    Dashboard:{
        marginTop:-35,
        color:'#ffffff',
        fontSize:25,
        fontWeight:'bold', 
        fontFamily:'Brygada-Bold',
    },
    btn:{
      width:330,
      height:60,
      borderRadius:25,
      marginTop:100,
      marginLeft:35,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#186DEE',
  },
  btn2:{
    width:330,
        height:60,
        borderRadius:25,
        marginTop:30,
        marginLeft:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#186DEE',
  },
  btn3:{
    width:330,
        height:60,
        borderRadius:25,
        marginTop:30,
        marginLeft:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#009933',
  },
  buttontext:{
    color:colors.white,
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:20,
    textAlign:'center',
},
})
export default Dashboard;