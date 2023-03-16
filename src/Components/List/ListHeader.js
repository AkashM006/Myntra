import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import { useNavigation, useRoute } from '@react-navigation/native'
import Skeleton from '../Reusable/Skeleton'
import ICONS from '../../icons/icons'
import { horizontalScale, verticalScale } from '../../utils/Metrics'
import { useSelector } from 'react-redux'

const ListHeader = ({ itemCount }) => {

    const navigation = useNavigation()
    let title = useRoute().params.title?.toUpperCase()
    title = title.length > 20 ? title.substring(0, 18) + '...' : title
    const { colors, theme } = useSelector(state => state.theme)

    const pressHandler = () => navigation.goBack()

    return (
        <View style={[styles.container,{
            borderBottomColor: theme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)',
            backgroundColor: colors['LIGHT']
        }]}>
            <View style={styles.leftContainer}>
                <TouchableOpacity style={styles.backContainer} onPress={pressHandler}>
                    <Image source={{ uri: ICONS.ICON_BACK }} style={[styles.back,{ tintColor: colors['DARK'] }]} />
                </TouchableOpacity>
                <View style={styles.left}>
                    <CustomText color={colors['DARK']} bottom={5} weight='light'>
                        {title}
                    </CustomText>
                    {itemCount === null ? <Skeleton height={verticalScale(15)} aspectRatio={5} borderRadius={4} /> : <CustomText color={colors['DARK']}>
                        {itemCount} Items
                    </CustomText>}
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Image source={{ uri: ICONS.ICON_SEARCH }} style={[styles.icon,{ tintColor: colors['DARK'] }]} />
                <TouchableOpacity>
                    <Image source={{ uri: ICONS.ICON_HEART }} style={[styles.icon, { tintColor: colors['DARK'] }]} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: ICONS.ICON_BAG }} style={[styles.icon, { marginRight: 10, tintColor: colors['DARK'] }]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: verticalScale(60),
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3.5%',
        justifyContent: 'space-between',
        borderBottomWidth: verticalScale(2)
    },
    back: { height: verticalScale(20), aspectRatio: 1, },
    backContainer: { marginRight: horizontalScale(15) },
    left: { flexDirection: 'column' },
    icon: {
        height: verticalScale(25),
        aspectRatio: 1,
        // marginRight: horizontalScale(20),
    },
    rightContainer: { flexDirection: 'row', flex: 1, justifyContent: 'space-around' },
    leftContainer: { flexDirection: 'row', alignItems: 'center', flex: 1.25 }
})

export default ListHeader