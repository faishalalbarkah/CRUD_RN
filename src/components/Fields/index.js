import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Gap } from "..";

const Fields = ({label, placeholder, keyboardType, onChange, value}) => {
    return (
        <View style={styles.WrapperFields}>
            <Text style={styles.TextInput}>{label}</Text>
            <Gap height={10}/>
                <TextInput  placeholder={placeholder}  
                style={styles.Inputan} 
                keyboardType={keyboardType}
                onChangeText={onChange}
                value={value}
                />
        </View>
    )
}



const styles = StyleSheet.create({
    WrapperFields: {
        padding: 10,
        backgroundColor:'white',
        borderRadius: 50
    },
    Inputan:{
        backgroundColor:"#e5e5e6",
        height: 50,
        borderRadius: 16,
        padding: 13,
        color:"#2A3256"
    },
    TextInput: {
        color: '#2A3256',
        // fontFamily: fonts.primary.regular,
        fontSize: 16
    },
})

export default Fields