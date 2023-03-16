import { StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { moderateScale } from '../../utils/Metrics'

const CustomLoader = () => {

    const { colors } = useSelector(state => state.theme)

    return  <ActivityIndicator 
                style={[styles.loader, { 
                        backgroundColor: colors['LIGHT'],
                        borderColor: colors['SHADOW']
                    }]} 
                size={'small'} 
                color={colors['PRIMARY']} 
            />
}

const styles = StyleSheet.create({
    loader: {
        padding: '2%',
        alignSelf: 'center',
        borderRadius: moderateScale(100),
        borderWidth: moderateScale(1),
    },
})

export default CustomLoader