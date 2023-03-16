import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import ICONS from '../../icons/icons'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'
import { useSelector } from 'react-redux'

const Footer = () => {

    const {colors} = useSelector(state => state.theme)

    return (
        <>
            <View style={[styles.top, { borderTopColor: colors['SHADOW'], backgroundColor: colors['SHADOW'] }]} />
            <View style={[styles.container, { backgroundColor: colors['LIGHT'] }]}>
                <TouchableOpacity style={styles.option}>
                    <Image tintColor={colors['DARK']} source={{ uri: ICONS.ICON_SORT }} style={styles.icon} />
                    <CustomText weight={'bold'} color={colors['DARK']} >
                        SORT
                    </CustomText>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.option}>
                    <Image tintColor={colors['DARK']} source={{ uri: ICONS.ICON_FILTER }} style={styles.icon} />
                    <CustomText weight={'bold'} color={colors['DARK']} >
                        FILTER
                    </CustomText>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: verticalScale(50),
        flexDirection: 'row',
    },
    option: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        height: verticalScale(20),
        marginRight: horizontalScale(10),
        aspectRatio: 1,
    },
    separator: {
        height: verticalScale(25),
        width: horizontalScale(1),
        backgroundColor: 'gray',
        alignSelf: 'center'
    },
    top: {
        width: '100%',
        height: verticalScale(1),
        borderTopWidth: moderateScale(1),
    },
})

export default Footer