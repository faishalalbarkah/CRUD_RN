import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FloatingMenu, Gap, Loading, MainLayout } from "../../components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import GetcontactsActions from "../../services/actions/Contact/GetcontactsActions";
import RemovecontactActions from "../../services/actions/Contact/RemovecontactActions";


const Home = ({navigation}) => {
    const dispatch = useDispatch()
    const { data:contactList, isLoading} = useSelector(state => state.contactList)
    const {data: contactCreate} = useSelector(state => state.contactCreate)
    const { data: contactUpdate } = useSelector(state => state.contactUpdate)
    useEffect(() =>
    {
        dispatch(GetcontactsActions())
    }, [contactCreate, contactUpdate])
    
    return (
        <>
        {isLoading && (<Loading />)}
        {
            !isLoading && (
                <MainLayout>
                <View style={styles.WrapperTitle}>
                    <Text style={styles.TextList}>List Contact</Text>
                </View>
                <Gap height={20} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {contactList && contactList?.map((item) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Detail", {id: item.id})}>
                            <Card Item={item} UpdateAction={() => navigation.navigate("CreateContact", {type:"Edit", item})} RemoveAction={() => dispatch(RemovecontactActions(item.id))} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
    
                <FloatingMenu onPress={() => navigation.navigate("CreateContact")} />
            </MainLayout>
            )
        }
      
        </>
    )
}

const styles = StyleSheet.create({
    WrapperTitle: {
        height: 80,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    TextList: {
        fontSize: 20,
        color: 'white'
    },
})

export default Home