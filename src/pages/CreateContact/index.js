import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Fields, Gap, Loading, MainLayout } from "../../components";
import Button from "../../components/Button";
import  PostcontactActions  from "../../services/actions/Contact/PostcontactActions";
import GetcontactByIDActions from "../../services/actions/Contact/GetcontactByIDActions"
import { useDispatch, useSelector } from "react-redux";
import { PutcontactActions } from "../../services";

const CreateContact = ({navigation, route}) => {
    
    const Params = route.params?.item

    const id = Params?.id
  
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [ParseIntAge, setAge] = useState(0)
    const [photo, setPhoto] = useState("")
    const age = parseInt(ParseIntAge)
    
    const formUpdate = {
        firstName,
        lastName,
        age,
        photo,
        id
    }

    const form = {
        firstName,
        lastName,
        age,
        photo,
    }
   
    const { data:contactID, isLoading} = useSelector(state => state.contactID)
   
    useEffect(() =>
    {
        if(route.params?.type === "Edit") if(Params.id) dispatch(GetcontactByIDActions(Params.id))
       
    }, [])

    useEffect(() => {
        if(route.params?.type === "Edit")
        {
            setFirstName(contactID.firstName)
            setLastName(contactID.lastName)
            setAge(contactID.age)
            setPhoto(contactID.photo)
        }
    },[contactID])
   
    const onSubmit  = () => {
        if(route.params?.type === "Edit")
        {
            dispatch(PutcontactActions(formUpdate))
            setFirstName("")
            setLastName("")
            setAge(0)
            setPhoto("")
            navigation.navigate("Home")
            Alert.alert("Update Suksess")
        } else {
            dispatch(PostcontactActions(form))
            setFirstName("")
            setLastName("")
            setAge(0)
            setPhoto("")
            navigation.navigate("Home")
            Alert.alert("Suksess")
        }
      
    }
    return (
        <MainLayout>
             {isLoading && (<Loading />)}
             {!isLoading && (
            <View style={styles.WrapperContact}>
                <Fields value={firstName}
                    onChange={value => setFirstName(value)} label={"FirstName"} placeholder={"FirstName"} />
                <Fields value={lastName}
                    onChange={value => setLastName(value)} label={"LastName"} placeholder={"LastName"} />
                <Fields value={ParseIntAge + ""}
                  onChange={value => setAge(value)} label={"Age"} placeholder={"Age"} />
                <Fields value={photo}
                    onChange={value => setPhoto(value)} label={"Photo"} placeholder={"Photo"} />
                <Gap height={10} />
                <View style={{marginHorizontal: 10}}>
                    <Button onPress={onSubmit} title={"Save"} />
                </View>
            </View>
            )}
        </MainLayout>
       
    )
}


const styles = StyleSheet.create({
    WrapperContact: {
        margin: 20,
        borderRadius: 10,
        paddingVertical: 20,
        backgroundColor:'white'
    },
})

export default CreateContact