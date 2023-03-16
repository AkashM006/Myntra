import { View, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { memo, useState } from 'react'
import CustomText from '../Reusable/CustomText'
import { calculateDiscount, formatCurrency, months, substring } from '../../utils/utils'
import Rating from './Rating'
import { useNavigation } from '@react-navigation/native'
import ICONS from '../../icons/icons'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'
import { useSelector } from 'react-redux'

const Card = ({ cloth, index }) => {

    const {colors} = useSelector(state => state.theme)
    const COLORS = {...colors}
    const { height } = useWindowDimensions()
    const navigation = useNavigation()
    const [isFavourite, setIsFavourite] = useState(false)

    const activeHeart = { uri: ICONS.ICON_HEART_ACTIVE }
    const heart = { uri: ICONS.ICON_HEART }

    const hasDiscount = (cloth.discount && cloth.discount > 0) ? true : false

    let date = ''

    if (cloth.delivery) {
        let today = new Date()
        let result = new Date(today.setDate(today.getDate() + cloth.delivery))
        date = result.getDate() + ' ' + months[result.getMonth()]
    }

    const priceTextStyle = {
        true: {
            color: COLORS.SHADEDARK,
            textDecorationLine: 'line-through'
        },
        false: {
            color: COLORS.DARK,
            fontWeight: '700'
        }
    }

    const hasRating = (cloth.ratings > 0) ? true : false

    const pressHandler = () => {
        navigation.navigate('detail', {
            // name: cloth.name
            id: cloth.id
        })
    }

    return (
        <TouchableOpacity onPress={pressHandler} style={[styles.container, { 
                height: (height - 65) / 2, 
                borderRightWidth: moderateScale(1), 
                backgroundColor: colors['LIGHT'],
                borderColor: colors['SHADOW']
            }]}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: cloth.photo }} style={styles.image} />
                {hasRating && <Rating count={cloth.ratings} rating={cloth.star} />}
            </View>
            <View style={styles.body}>
                <View style={styles.titleContainer}>
                    <CustomText weight={'bold'} size={14} color={COLORS.SHADEDARK} style={styles.text}>
                        {substring(cloth.brand, 20)}
                    </CustomText>
                    <TouchableOpacity onPress={() => setIsFavourite(prev => !prev)}>
                        {isFavourite === true ?
                            <Image source={activeHeart} style={styles.icon} /> :
                            <Image source={heart} style={styles.icon} />
                        }
                    </TouchableOpacity>
                </View>
                <CustomText color={COLORS.SHADEDARK} style={styles.name}>
                    {substring(cloth.name, 30)}
                </CustomText>
                <View style={styles.priceContainer}>
                    <CustomText size={14} style={priceTextStyle[hasDiscount]}>
                        {formatCurrency(cloth.mrp).split('.')[0]}
                    </CustomText>
                    {hasDiscount && <CustomText size={14} color={colors['DARK']} weight={'light'} style={styles.discount}>
                        {formatCurrency(+calculateDiscount(cloth.mrp, cloth.discount)).split('.')[0]}
                    </CustomText>}
                    {hasDiscount && <CustomText color={COLORS.PRIMARY} style={styles.percentage}>
                        {cloth.discount + '% OFF'}
                    </CustomText>}
                </View>
                {cloth.delivery && cloth.delivery > 0 && <CustomText color={COLORS.SHADEDARK}>
                    Delivered by {date}
                </CustomText>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        elevation: 2,
        borderBottomWidth: moderateScale(1),
    },
    imageContainer: { height: '75%', },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        height: verticalScale(20),
        aspectRatio: 1
    },
    body: {
        paddingVertical: verticalScale(2),
        paddingHorizontal: horizontalScale(10),
    },
    name: {
        marginTop: verticalScale(2)
    },
    priceContainer: { flexDirection: 'row', marginTop: verticalScale(2), alignItems: 'center' },
    discount: { marginLeft: horizontalScale(5), },
    percentage: { marginLeft: horizontalScale(3), },
})

const arePropsEqual = (prev, next) => {
    for (let key in prev) {
        if (!(key in next) || prev[key] !== next[key]) return false
    }
    return true
}

export default memo(Card, arePropsEqual)