import React from 'react'
import { ActivityIndicator, Platform, StyleSheet, View, Text } from 'react-native'

const Loading = () =>
{
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        zIndex: 99999,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: typeof type === 'string' && type === 'inner' ? bg ? bg : colors.background : colors.loadingBackground,
        width: '100%',
        height: '100%'
    }
})

export default Loading