import { View, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const CustomLoader = () => {

    const { colors } = useSelector(state => state.theme)

    return (
        <View>
            <ActivityIndicator style={[styles.loader, { backgroundColor: colors['LIGHT'] }]} size={'small'} color={colors['PRIMARY']} />
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        padding: '2%',
        alignSelf: 'center',
        borderRadius: 100
    }
})

export default CustomLoader