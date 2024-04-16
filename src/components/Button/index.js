import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const Button = ({ bg = '#1A72DD', fontSize = 16, color = '#fff', borderColor="#1A72DD" , title, Icon, onPress }) =>
{
    return (
        
        <TouchableOpacity style={styles.button(bg, borderColor)} onPress={onPress}>
            <View style={styles.wrapper}>
                {/* {Icon && (<Image style={styles.ImgIcon} source={Icon} />)} */}
                <Text style={styles.TextButton(fontSize, color)}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ImgIcon: {
        width: 25,
        height: 25,
        position: 'absolute',
        left: 15,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: (bg, borderColor) => ({
        backgroundColor: bg,
        borderRadius: 15,
        height: 50,
        // flex: 1,
        // flexDirection: 'row',
        width: "100%",
        // alignItems:'center',
        borderWidth: 1,
        borderColor: borderColor
    }),
    TextButton: (fontSize, color) => ({
        fontSize: fontSize,
        color: color,
        textAlign:'center',
       
      })
})

export default Button