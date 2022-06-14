import React from 'react';
import { View,Text,StyleSheet,TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';

import colors from '../Assets/config/colors';
function Login({navigation}) {
    return (
    <View style={styles.container}>
         <StatusBar
         backgroundColor="#ffffff"
         barStyle="light-content"/>
         
         <Image style={styles.image}
         source={require('../Assets/config/hn.png')} />
        
         <TextInput
         style={styles.input}
         placeholder="User name"
         />
         <TextInput
         style={styles.input1}
         placeholder="Password"
         secureTextEntry
         />
         <View style={styles.btncontainer}>
             <TouchableOpacity style={styles.userbtn} onPress={()=>  navigation.navigate('Dashboard')}>
                 <Text style={styles.btntext}>Login</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.userbtn} onPress={()=>  navigation.navigate('AccountScreen')}>
                 <Text style={styles.btntext}>Sign-up</Text>
             </TouchableOpacity>
         </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
    },
    input:{
        width:'90%',
        backgroundColor:'#e8e8e8',
        marginTop:30,
        padding:13,
        marginBottom:10,
        elevation:3,
        borderRadius:20,
    },
    input1:{
        width:'90%',
        backgroundColor:'#e8e8e8',
        padding:13,
        marginBottom:10,
        marginTop:12,
        elevation:5,
        borderRadius:20,
    },
    btncontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        elevation:5,
    },
    text:{
        textAlign:'center',
        fontSize:30,
        marginTop:-20,
        fontFamily:"Festive-Regular",
    },
    userbtn:{
        backgroundColor: '#186DEE',
        marginTop:20,
        borderRadius:20,
        padding:15,
        width: '45%',
    },
    btntext:{
        fontSize:18,
        textAlign:'center',
        color:colors.white,
        fontWeight:'bold',
    },
    image:{
        width:240,
        height:230,
        marginBottom:60,
        marginTop:-90,
        borderRadius:190,
        borderColor:'#186DEE',
        borderWidth:5,
    },
})
export default Login;