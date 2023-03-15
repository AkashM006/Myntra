import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import ICONS from '../../icons/icons'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'

const Footer = () => {

    return (
        <>
            <View style={styles.top} />
            <View style={styles.container}>
                <TouchableOpacity style={styles.option}>
                    <Image tintColor={'gray'} source={{ uri: ICONS.ICON_SORT }} style={styles.icon} />
                    <CustomText weight={'bold'}>
                        SORT
                    </CustomText>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.option}>
                    <Image tintColor={'gray'} source={{ uri: ICONS.ICON_FILTER }} style={styles.icon} />
                    <CustomText weight={'bold'}>
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
        backgroundColor: 'white',
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
        borderColor: 'lightgray'
    },
})

export default Footer