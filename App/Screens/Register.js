import React from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import Heading from '../Components/Heading';
import InputText from '../Components/InputText';
function Register(props) {
  return (
    <View style={styles.container} >
     <Heading style={styles.heading}>Register</Heading>
     <InputText style={styles.input} 
     placeholder={'email'}
     keyboardType={'email-address'}/>
     <InputText style={styles.input1} placeholder={'Password'} secureTestEntry/>
     <TouchableOpacity style={styles.btn} onPress={()=> (console.log)}>
       <Text style={styles.text}>
         Login
       </Text>
     </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    paddingTop:120,
  },
  heading:{
    marginBottom:30,
  },
  input:{
    marginVertical:20,
    marginTop:90,
  },
  input1:{
    marginVertical:20,
    marginTop:20,
  },
  btn:{
    backgroundColor:'purple',
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    padding:15,
    borderRadius:30,
    marginTop:10,
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
  }
})
export default Register;