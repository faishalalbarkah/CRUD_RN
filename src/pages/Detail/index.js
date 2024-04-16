import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Gap, Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { GetcontactByIDActions } from "../../services";

const Detail = ({navigation, route}) => {
    const dispatch = useDispatch()
    const { data:contactID, isLoading} = useSelector(state => state.contactID)
    useEffect(() =>
    {
        dispatch(GetcontactByIDActions(route?.params?.id))
    }, [])
    
    return (
        <>
        {isLoading && (<Loading />)}
       {!isLoading && (
        <View style={styles.WrapperCard}>
            <View style={styles.WrapperRow}>
                <View style={styles.WrapperText}>
                    <Text style={{color:'black'}}>ID :</Text>
                    <Gap width={5} />
                    <Text style={{color:'#808080'}}>{contactID?.id}</Text>
                </View>
                <View style={styles.WrapperText}>
                    <Text style={{color:'black'}}>Age :</Text>
                    <Gap width={5} />
                    <Text style={{color:'#808080'}}>{contactID?.age}</Text>
                </View>
            </View>
            
            <View style={styles.WrapperRow}>
                <View style={styles.WrapperText}>
                    <Text style={{color:'black'}}>FirstName :</Text>
                    <Gap width={5} />
                    <Text style={{color:'#808080'}}>{contactID?.firstName}</Text>
                </View>
                <View style={styles.WrapperText}>
                    <Text style={{color:'black'}}>LastName :</Text>
                    <Gap width={5} />
                    <Text style={{color:'#808080'}}>{contactID?.firstName}</Text>
                </View>
            </View>

            <View style={styles.WrapperImage}>
                {contactID?.photo === "N/A" && (<Text>No Image</Text>)}
                { contactID?.photo !== "N/A" && (<Image style={{width: 100, height: 100}} source={{uri: contactID?.photo}} />)}
            </View>
            
        </View>
       )}
        </>
    )
}


const styles = StyleSheet.create({
    WrapperCard: {
        marginVertical: 5,
        backgroundColor:'white',
        borderRadius: 7,
        marginHorizontal: 20,
        padding: 10,
        flex: 1,
    },
    WrapperText: {
        padding: 20,
        maxWidth: '50%',
        flexDirection:'row'
    },
    WrapperRow: {
        maxWidth: '90%',
        flexDirection: 'row'
    },
    WrapperImage: {
        flex: 1,
        alignItems:'center',
    }
})

export default Detail