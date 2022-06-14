import React,{ useState} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import SearchBox from '../Components/SearchBox';
import  BackIcon  from 'react-native-vector-icons/MaterialIcons';
import colors from '../Assets/config/colors';
const App = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false)
    const [toggleCheckBox5, setToggleCheckBox5] = useState(false)
    const [toggleCheckBox6, setToggleCheckBox6] = useState(false)
    const [toggleCheckBox7, setToggleCheckBox7] = useState(false)
    const [toggleCheckBox8, setToggleCheckBox8] = useState(false)
    const [toggleCheckBox9, setToggleCheckBox9] = useState(false)
    const [toggleCheckBox10, setToggleCheckBox10] = useState(false)
    const [toggleCheckBox11, setToggleCheckBox11] = useState(false)
    const [toggleCheckBox12, setToggleCheckBox12] = useState(false)
    const [toggleCheckBox13, setToggleCheckBox13] = useState(false)
    const [toggleCheckBox14, setToggleCheckBox14] = useState(false)
    const [toggleCheckBox15, setToggleCheckBox15] = useState(false)
   
    
  const [Items, setItems] = useState([

      {key:1, item:'Sir Kazim C6'},
      {key:2, item:'Sir Hassan C9'},
      {key:3, item:'Sir Abbas C9'},
      {key:4, item:'Sir Tauqeer C9'},
      {key:5, item:'Sir Mustafa C11'},
      {key:6, item:'Sir Abbas C12'},
      {key:7, item:'Sir Ghazi C12'},
      {key:8, item:'Sir Ali Hassan'},
      {key:9, item:'Sir Furqan'},
      {key:10, item:'Sir Mujtuba'},
      {key:40, item:'Sir Jawwad'},
      {key:44, item:'Sir Safdar'},
      {key:50, item:'Sir Abbas Mehdi'},
      {key:49, item:'Sir Kumail'},
      {key:90, item:'Sir Haseeb'},
      {key:80, item:'Sir Muslim'},
      
  ])
    return (
        <View style={styles.body}>
            
            <SearchBox/>
            <View style={styles.container}>
          <TouchableHighlight>
            <BackIcon style={styles.Icon} 
            onPress={()=>  navigation.goBack()}
              size={25}
              name='arrow-back-ios'/>
        </TouchableHighlight>
            <Text style={styles.text}>
                   TEACHERS
            </Text>
             </View>
             
            <ScrollView>
        <TouchableOpacity>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
             <Text style={styles.text1}>
                Sir Kazim C6
             </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox1}
            onValueChange={(newValue) => setToggleCheckBox1(newValue)}/>
            <Text style={styles.text1}>
                Sir Hassan C9
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={(newValue) => setToggleCheckBox2(newValue)}/>
            <Text style={styles.text1}>
                Sir Abbas C9
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox3}
            onValueChange={(newValue) => setToggleCheckBox3(newValue)}/>
            <Text style={styles.text1}>
                Sir Tauqeer C9
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox4}
            onValueChange={(newValue) => setToggleCheckBox4(newValue)}/>
            <Text style={styles.text1}>
                 Sir Mustafa C11
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox5}
            onValueChange={(newValue) => setToggleCheckBox5(newValue)}/>
            <Text style={styles.text1}>
                Sir Abbas C12
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox6}
            onValueChange={(newValue) => setToggleCheckBox6(newValue)}/>
            <Text style={styles.text1}>
                Sir Ghazi C12
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox7}
            onValueChange={(newValue) => setToggleCheckBox7(newValue)}/>
            <Text style={styles.text1}>
                Sir Ali Hassan
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox8}
            onValueChange={(newValue) => setToggleCheckBox8(newValue)}/>
            <Text style={styles.text1}>
                Sir Furqan 
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox9}
            onValueChange={(newValue) => setToggleCheckBox9(newValue)}/>
            <Text style={styles.text1}>
                Sir Mujtuba
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox10}
            onValueChange={(newValue) => setToggleCheckBox10(newValue)}/>
            <Text style={styles.text1}>
                Sir Jawwad
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox11}
            onValueChange={(newValue) => setToggleCheckBox11(newValue)}/>
            <Text style={styles.text1}>
                Sir Safdar
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox12}
            onValueChange={(newValue) => setToggleCheckBox12(newValue)}/>
            <Text style={styles.text1}>
                Sir Abbas Mehdi
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox13}
            onValueChange={(newValue) => setToggleCheckBox13(newValue)}/>
            <Text style={styles.text1}>
                Sir Kumail
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox14}
            onValueChange={(newValue) => setToggleCheckBox14(newValue)}/>
            <Text style={styles.text1}>
                Sir Haseeb
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox15}
            onValueChange={(newValue) => setToggleCheckBox15(newValue)}/>
            <Text style={styles.text1}>
                Sir Muslim
            </Text>
         </View>
         </TouchableOpacity>
            </ScrollView>
        
        </View>
    
    );
}
const styles = StyleSheet.create({
    body:{
        paddingTop: 100,
        flex:1,
        flexDirection:'column',
        backgroundColor:'#ffffff',
    },
    Icon:{
        color:colors.white,
        marginTop:5,
        marginRight:340,
    },
    container:{
        width:400,
        height:60,
        marginTop:-90,
        marginBottom:70,
        marginLeft:5,
        borderRadius:20,
        fontFamily:"Festive-Regular",
        elevation:5,
        backgroundColor:'#009933',
        alignItems:'center',
        justifyContent:'center',
      },
      text:{
          marginTop:-30,
          color:'#ffffff',
          fontSize:22,
          fontWeight:'bold', 
      },
      item:{
        width:350,
        height:40,
        margin:9,
        borderRadius:20,
        marginLeft:53,
        backgroundColor:'#99ff33',
        alignItems:'flex-start',
        justifyContent:'center',
    },
      item1:{
        width:350,
        height:40,
        margin:9,
        borderRadius:20,
        marginLeft:53,
        backgroundColor:'#33cc33',
        alignItems:'flex-start',
        justifyContent:'center',
    },
    text1:{
        marginLeft:45,
        marginTop:-25,
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:20,
        
    },
    box:{
        backgroundColor:'#99ff33',
        flexDirection:'row',
        width:22,
        height:18,
        marginLeft:10,
        marginTop:5,
    },
    box1:{
        backgroundColor:'#33cc33',
        flexDirection:'row',
        width:22,
        height:18,
        marginLeft:10,
        marginTop:5,
    },
})
export default App;