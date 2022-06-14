import React from 'react';
import { StyleSheet, TextInput} from 'react-native';
function InputText({style, ...props}) {
    return (
      <TextInput {...props} style={[style, styles.InputText]}/>
    );
}
const styles = StyleSheet.create({
    InputText:{
        backgroundColor:'#e8e8e8',
        width:'90%',
        padding:15,
        borderRadius:30,
        elevation:5,
    },
})
export default InputText;