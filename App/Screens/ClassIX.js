import React,{ useState} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import  BackIcon  from 'react-native-vector-icons/MaterialIcons';
import SearchBox from '../Components/SearchBox';
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
    
   
    
  const [Items, setItems] = useState([

      {key:1, item:'Ali Deep'},
      {key:2, item:'Ali Hadi'},
      {key:3, item:'Ruhan'},
      {key:4, item:'Syed Measum'},
      {key:5, item:'M Hussain'},
      {key:6, item:'Furukh'},
      {key:7, item:'Jari'},
      {key:8, item:'Measum Hussain'},
      {key:9, item:'Daim'},
      {key:10, item:'Mohib'},
      {key:40, item:'Zarain'},
      {key:44, item:'Hamza'},
      {key:50, item:'Ghazi'},
      
  ])
    return (
        <View style={styles.body}>
            <SearchBox/>
            <View style={styles.container}>
            <BackIcon style={styles.Icon} 
            onPress={()=>  navigation.goBack()}
              size={25}
              name='arrow-back-ios'/>
            <Text style={styles.text}>
                  CLASS IX
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
                Ali Deep
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
                Ali Hadi
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
                Ruhan
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
                Syed Measum
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
                 M Hussain
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
                Furukh
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
                Jari
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
                Measum Hussain
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
                 Daim
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
                 Mohib
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
                Zarain
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
                  Hamza
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
                   Ghazi
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
    container:{
        width:400,
        height:60,
        marginTop:-90,
        marginBottom:70,
        marginLeft:5,
        borderRadius:20,
        elevation:5,
        backgroundColor:'#20a0c9',
        alignItems:'center',
        justifyContent:'center',
      },
      Icon:{
        color:colors.white,
        marginTop:2,
        marginRight:340,
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
        backgroundColor:'#7bd1e7',
        alignItems:'flex-start',
        justifyContent:'center',
    },
      item1:{
        width:350,
        height:40,
        margin:9,
        borderRadius:20,
        marginLeft:53,
        backgroundColor:'#05A5FA',
        alignItems:'flex-start',
        justifyContent:'center',
    },
    text1:{
        marginLeft:45,
        marginTop:-25,
        color:'#000000',
        fontSize:20,
    },
    box:{
        backgroundColor:'#7bd1e7',
        flexDirection:'row',
        width:22,
        height:18,
        marginLeft:10,
        marginTop:5,
    },
    box1:{
        backgroundColor:'#05A5FA',
        flexDirection:'row',
        width:22,
        height:18,
        marginLeft:10,
        marginTop:5,
    },
})
export default App;