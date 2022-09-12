
import React, { useState, useEffect } from 'react';
import { SafeAreaView , FlatList, StyleSheet,Image, Text, View, TouchableOpacity} from 'react-native';
import colors from '../Assets/config/colors';
import  BackIcon  from 'react-native-vector-icons/MaterialIcons';


const Data=[
  {
    id:1,
    username:'Akhtar',
    pic: require('../Assets/Images/men.png'),
    
    
  },
  {
    id:2,
    username:'M Mehdi',
    pic: require('../Assets/Images/men.png'),
  },
 
  {
    id:3,
    username:'Qasim',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:4,
    username:'Hussain',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:5,
    username:'Measum',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:6,
    username:'Kumail',
    pic: require('../Assets/Images/men.png'),
    
  },
  {
    id:7,
    username:'Aabis',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:8,
    username:'Shaheer',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:9,
    username:'Ghazi',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:10,
    username:'Naqi',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:11,
    username:'Hammad',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:12,
    username:'Rehman',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:13,
    username:'Rahim',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:14,
    username:'Qussain',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:15,
    username:'Ali shan',
    pic: require('../Assets/Images/men.png'),
  },
  {
    id:16,
    username:'Yawar',
    pic: require('../Assets/Images/men.png'),
  },

  
]

function Test({navigation}) {
    const [isSelected, setSelected ]=useState(false);
    const [isSelected1, setSelected1 ]=useState(false)
    var [ isPress, setIsPress ] = React.useState(false);
    
    return (
        <SafeAreaView style={{backgroundColor:'#ffffff'}}>
          <View>
            <View style={{backgroundColor:'#05A5FA', width:355, height:65,marginTop:5,marginLeft:5,borderRadius:20}}>
             
              <Text style={{color:'white' , fontSize:30,fontFamily:'OpenSans-BoldItalic', top:12, left:125}}>Class IX</Text>
              <BackIcon style={{ color:colors.white,marginTop:-19,marginLeft:20}} 
              onPress={()=>  navigation.goBack()} 
              size={25}
              name='arrow-back-ios'/>
            </View>
          </View>
          <View style={{width:410, height:1, backgroundColor:colors.gray, marginTop:10}}></View>
            <FlatList style={{}}
        data={Data}
        renderItem={({item}) =>(
          
            <View style={styles.container}>
            <Text style={{fontSize:18,color:'black',left:65,top:35, fontFamily:'Roboto-Italic'}}>
                {item.username}
            </Text>
            <Image style={{width:50, height:50, left:12,marginBottom:9}} source={item.pic}/>
            <View style={{width:410, height:1, backgroundColor:colors.gray}}></View>
            <View style={{flexDirection:'row'}}> 
            <TouchableOpacity style={[isPress ? styles.absent : styles.present]}>
                <Text style={{ marginLeft:10,marginTop:4,color:'white',fontWeight:'bold'}}>Absent</Text>

            </TouchableOpacity>
            <TouchableOpacity style={[isPress ? styles.present : styles.absent]}>
                  <Text style={{ marginLeft:10,marginTop:4,color:'white',fontWeight:'bold'}}>Present</Text>
            </TouchableOpacity>
            {/* <View style={{ marginTop:10,height:50,color:'black'}}></View> */}
            </View>
           
            </View>
           
           
           
            
    )}
        keyExtractor={item => item.id}
      />
      
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
  absent:{
    width:70, 
    height:30, backgroundColor:'#33cc33', borderWidth:1,
               borderColor:'#33cc33', borderRadius:15, top:-50, left:200,
               marginLeft:10
  },
  present:{
    width:70, height:30, backgroundColor:colors.red, borderWidth:1,
               borderColor:'red', borderRadius:15, top:-50, left:200
  },
    container:{
    flex: 1,
    height:60,
    marginTop: 8,
    borderColor:'white'
},

})
export default Test;