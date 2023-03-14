import { StyleSheet, ActivityIndicator, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const CustomLoader = () => {

    const { colors } = useSelector(state => state.theme)

    return <ActivityIndicator style={[styles.loader, { backgroundColor: colors['LIGHT'] }]} size={'small'} color={colors['PRIMARY']} />
}

const styles = StyleSheet.create({
    loader: {
        padding: '2%',
        alignSelf: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
})

export default CustomLoader