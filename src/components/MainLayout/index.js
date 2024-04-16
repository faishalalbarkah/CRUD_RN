import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Loading } from '..'

const MainLayout = ({ children}) =>
{
    return (
        <View style={styles.page}>
            <SafeAreaView style={styles.safeAreaView}>
                {children}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    page: 
    {
        flex: 1,
        backgroundColor: '#c8c8c8',
    },
    safeAreaView: { flex: 1 }
})


export default MainLayout