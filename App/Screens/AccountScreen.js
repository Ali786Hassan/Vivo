import React from 'react';
import colors from '../Assets/config/colors';
import { View,Text,StyleSheet,TextInput, TouchableOpacity, StatusBar,ImageBackground} from 'react-native';
function AccountScreen({navigation}) {
    return (
        <View>
            <ImageBackground style={styles.backimg}
             source={require('../Assets/config/ali5.jpg')}>
        
         <StatusBar
         backgroundColor="#645b59"
         barStyle="light-content"/>
         <View style={styles.container1}>
         <Text style={styles.Dashboard}>
             Create Account
         </Text>
         </View>
         <TextInput
         style={styles.input}
         placeholder="User name"
         />
         <TextInput
         style={styles.input2}
         placeholder="Email"
         />
         <TextInput
         style={styles.input1}
         placeholder="Phone no"
         secureTextEntry
         />
         <TextInput
         style={styles.input1}
         placeholder="Password"
         secureTextEntry
         />
         
         <View style={styles.btncontainer}>
             <TouchableOpacity style={styles.userbtn} onPress={()=>  alert('Your Account have been Sucessful')}>
                 <Text style={styles.btntext}>Create</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.userbtn} onPress={()=>  navigation.navigate('Login')}>
                 <Text style={styles.btntext}>Back</Text>
             </TouchableOpacity>
             
         </View>
         </ImageBackground>
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
    backimg:{
        width:'100%',
        height:'100%',
    },
    container1:{
        width:400,
        height:70,
        marginTop:25,
        marginLeft:5,
        marginBottom:-40,
        borderRadius:15,
        color:colors.light,
        backgroundColor:'#3333cc',
        elevation:5,
        alignItems:'center',
        justifyContent:'center',
    },
    btncontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        elevation:5,
    },
    userbtn:{
        backgroundColor: '#186DEE',
        marginTop:20,
        borderRadius:20,
        padding:15,
        width: '45%',
    },
    Dashboard:{
        marginTop:2,
        color:'#ffffff',
        fontSize:25,
        fontWeight:'bold', 
    },
    input:{
        width:'90%',
        backgroundColor:'#e8e8e8',
        marginTop:180,
        padding:13,
        marginBottom:10,
        marginLeft:20,
        elevation:5,
        borderRadius:20,
    },
    input1:{
        width:'90%',
        backgroundColor:'#e8e8e8',
        padding:13,
        marginBottom:10,
        marginLeft:20,
        marginTop:12,
        elevation:5,
        borderRadius:20,
    },
    input2:{
        width:'90%',
        backgroundColor:'#e8e8e8',
        padding:13,
        marginBottom:10,
        marginLeft:20,
        marginTop:12,
        elevation:5,
        borderRadius:20,
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
        marginLeft:23,
        marginRight:10,
        padding:15,
        width: '45%',
    },
    btntext:{
        fontSize:20,
        textAlign:'center',
        color:colors.white,
        fontWeight:'bold',
    },
})
export default AccountScreen;