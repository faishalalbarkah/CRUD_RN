import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const FloatingMenu = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.WrapperContent}>
                <Text style={styles.TextItems}>+</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    WrapperContent: {
        flex: 1,
        flexDirection:'row',
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        bottom: 10,
        left: 20, 
        height: 50,
        borderRadius: 50,
        width:50,
        backgroundColor: '#1A72DD',
    },
    TextItems: {
        color:'white',
        fontSize: 25,
    }
 })

 export default FloatingMenu