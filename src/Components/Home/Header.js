import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet } from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'
import CustomText from '../Reusable/CustomText'
import ICONS from '../../icons/icons'

const Header = () => {

    const { colors } = useSelector(state => state.theme)

    const ICONS_LIST = [
        {
            id: 1,
            image: ICONS.ICON_SEARCH
        },
        {
            id: 2,
            image: ICONS.ICON_BELL
        },
        {
            id: 3,
            image: ICONS.ICON_HEART
        },
        {
            id: 4,
            image: ICONS.ICON_BAG
        },
    ]

    return (
        <View style={[styles.container, { backgroundColor: colors['LIGHT'] }]}>
            <View style={styles.leftContainer}>
                <Image style={styles.logo} source={{ uri: ICONS.ICON_LOGO }} />
                <View style={{ marginLeft: horizontalScale(5) }}>
                    <CustomText size={10}>Become</CustomText>
                    <CustomText size={10} color={colors['PRIMARY']}>Insider</CustomText>
                </View>
            </View>
            <View style={styles.rightContainer}>
                {ICONS_LIST.map(item => (
                    <TouchableOpacity key={item.id}>
                        <Image style={styles.icon} source={{ uri: item.image }} tintColor={colors['DARK']} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: verticalScale(60),
        width: '100%',
        paddingHorizontal: horizontalScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: moderateScale(2)
    },
    logo: {
        height: verticalScale(30),
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    leftContainer: {
        flexDirection: 'row',
        aligntItems: 'center',
        flex: 1
    },
    icon: {
        height: verticalScale(25),
        resizeMode: 'contain',
        aspectRatio: 2
    },
    rightContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly'
    }
})

export default Header