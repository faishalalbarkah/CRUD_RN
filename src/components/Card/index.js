import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gap } from "..";
import { TouchableOpacity } from "react-native-gesture-handler";

const Card = ({Item, RemoveAction, UpdateAction}) => {
    return (
        <View style={styles.WrapperCard}>
            <View>
                <View style={styles.WrapperText}>
                    <Text style={{color:'black'}}>FirstName :</Text>
                    <Gap width={5} />
                    <Text style={{color:'#808080'}}>{Item.firstName}</Text>
                </View>
                <View style={styles.WrapperText}>
                    <Text style={{color:'black'}}>Age :</Text>
                    <Gap width={5} />
                    <Text style={{color:'#808080'}}>{Item.age}</Text>
                </View>
            </View>

            <View style={styles.WrapperActions}>
                <TouchableOpacity onPress={RemoveAction}>
                    <Text style={{color:'red'}}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={UpdateAction}>
                    <Text style={{color:'yellow'}}>Edit</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    WrapperCard: {
        marginVertical: 5,
        backgroundColor:'white',
        borderRadius: 7,
        marginHorizontal: 20,
        padding: 10,
        flex: 2,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    WrapperText: {
        flexDirection:'row'
    },
    WrapperActions: {
        marginLeft: 10,
    }
})

export default Card