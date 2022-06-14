import React,{ useState} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity,TouchableHighlight} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import colors from '../Assets/config/colors';
import SearchBox from '../Components/SearchBox';
import  BackIcon  from 'react-native-vector-icons/MaterialIcons';
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
    
  const [Items, setItems] = useState([

      {key:1, item:'Murtuza'},
      {key:2, item:'Ali Abbas'},
      {key:3, item:'Hussain'},
      {key:4, item:'Yasir'},
      {key:5, item:'Rohallah'},
      {key:6, item:'Kashan'},
      {key:7, item:'Khawar'},
      {key:8, item:'Khizer'},
      {key:9, item:'Mustufa imam'},
      {key:10, item:'Osija'},
      {key:40, item:'Murtuza imam'},
      {key:44, item:'Syed salman'},
      {key:50, item:'Hassan zaidi'},
      {key:49, item:'Akber'},
  ]);
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
               CLASS X
            </Text>
             </View>
            <ScrollView>
        <TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            borderRadius="100%"
            style={styles.box}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
           
             <Text style={styles.text1}>
                Murtuza
             </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox1}
            onValueChange={(newValue) => setToggleCheckBox1(newValue)}/>
            <Text style={styles.text1}>
                Ali Abbas
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={(newValue) => setToggleCheckBox2(newValue)}/>
            <Text style={styles.text1}>
                Hussain
            </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox3}
            onValueChange={(newValue) => setToggleCheckBox3(newValue)}/>
            <Text style={styles.text1}>
                Yasir
            </Text>
         </View>
         </TouchableOpacity>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox4}
            onValueChange={(newValue) => setToggleCheckBox4(newValue)}/>
            <Text style={styles.text1}>
                Rohallah
            </Text>
         </View>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox5}
            onValueChange={(newValue) => setToggleCheckBox5(newValue)}/>
            <Text style={styles.text1}>
                Kashan
            </Text>
         </View>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox6}
            onValueChange={(newValue) => setToggleCheckBox6(newValue)}/>
            <Text style={styles.text1}>
                Khawar
            </Text>
         </View>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox7}
            onValueChange={(newValue) => setToggleCheckBox7(newValue)}/>
            <Text style={styles.text1}>
                Khizer
            </Text>
         </View>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox8}
            onValueChange={(newValue) => setToggleCheckBox8(newValue)}/>
            <Text style={styles.text1}>
                Mustufa imam
            </Text>
         </View>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox9}
            onValueChange={(newValue) => setToggleCheckBox9(newValue)}/>
            <Text style={styles.text1}>
                Osija
            </Text>
         </View>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox10}
            onValueChange={(newValue) => setToggleCheckBox10(newValue)}/>
            <Text style={styles.text1}>
                Murtuza imam
            </Text>
         </View>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox11}
            onValueChange={(newValue) => setToggleCheckBox11(newValue)}/>
            <Text style={styles.text1}>
                Syed salman
            </Text>
         </View>
         <View style={styles.item}>
         <CheckBox
            style={styles.box}
            disabled={false}
            value={toggleCheckBox12}
            onValueChange={(newValue) => setToggleCheckBox12(newValue)}/>
            <Text style={styles.text1}>
                Hassan zaidi
            </Text>
         </View>
         <View style={styles.item1}>
         <CheckBox
            style={styles.box1}
            disabled={false}
            value={toggleCheckBox13}
            onValueChange={(newValue) => setToggleCheckBox13(newValue)}/>
            <Text style={styles.text1}>
                Akber
            </Text>
         </View>
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
        marginTop:2,
        marginRight:340,
    },
    container:{
        width:400,
        height:60,
        marginTop:-90,
        marginBottom:70,
        marginLeft:5,
        borderRadius:20,
        backgroundColor:'#20a0c9',
        elevation:5,
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