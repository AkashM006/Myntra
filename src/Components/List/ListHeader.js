import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import { useNavigation, useRoute } from '@react-navigation/native'
import Skeleton from '../Reusable/Skeleton'
import ICONS from '../../icons/icons'
import { horizontalScale, verticalScale } from '../../utils/Metrics'

const ListHeader = ({ itemCount }) => {

    const navigation = useNavigation()
    let title = useRoute().params.title?.toUpperCase()
    title = title.length > 20 ? title.substring(0, 18) + '...' : title

    const pressHandler = () => navigation.goBack()

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <TouchableOpacity style={styles.backContainer} onPress={pressHandler}>
                    <Image source={{ uri: ICONS.ICON_BACK }} style={styles.back} />
                </TouchableOpacity>
                <View style={styles.left}>
                    <CustomText bottom={5} weight={'light'}>
                        {title}
                    </CustomText>
                    {itemCount === null ? <Skeleton height={verticalScale(15)} aspectRatio={5} borderRadius={4} /> : <CustomText>
                        {itemCount} Items
                    </CustomText>}
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Image source={{ uri: ICONS.ICON_SEARCH }} style={styles.icon} />
                <TouchableOpacity>
                    <Image source={{ uri: ICONS.ICON_HEART }} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: ICONS.ICON_BAG }} style={[styles.icon, { marginRight: 10 }]} />                    
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: verticalScale(60),
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3.5%',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0,0,0,0.2)',
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