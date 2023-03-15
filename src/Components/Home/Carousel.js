import { View, StyleSheet, Image, useWindowDimensions, Animated, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import CustomText from '../Reusable/CustomText'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'

const Card = ({ img }) => {

    const width = useWindowDimensions().width
    const navigation = useNavigation()

    const pressHandler = () => navigation.navigate('list', { title: 'Gift Cards' })

    return (
        <TouchableOpacity onPress={pressHandler} style={[styles.imageContainer, { width: width - 20 }]}>
            <Image source={{ uri: img }} style={[styles.image]} />
        </TouchableOpacity>
    )
}

const Carousel = ({ item }) => {

    const renderItem = ({ item }) => <Card img={item} />
    const keyExtractor = (_, index) => index
    const { colors } = useSelector(state => state.theme)

    const width = useWindowDimensions().width

    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <View style={[styles.container, { backgroundColor: colors['LIGHT'] }]}>
            <CustomText weight={'bold'} size={18} style={styles.heading}>
                {item.title}
            </CustomText>
            <Animated.FlatList
                data={item.url}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={[{ height: +item.height, width: width - 20, marginVertical: verticalScale(5) }]}
                contentContainerStyle={{ height: +item.height }}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                pagingEnabled={true}
                decelerationRate='fast'
                snapToAlignment='center'
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
            />
            <View style={styles.indicatorContainer}>
                {
                    item.url.map((i, index) => (
                        <View key={index} style={styles.indicator} />
                    ))
                }
                {
                    item.url?.length > 1 &&
                    <Animated.View style={
                        [styles.activeIndicator, {
                            transform: [{
                                translateX: Animated.divide(scrollX, (width - 20)).interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 16]
                                })
                            }]
                        }]
                    } />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(10),
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(10),
    },
    heading: {
        textAlign: 'center',
        marginVertical: verticalScale(5)
    },
    image: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: moderateScale(7),
    },
    imageContainer: { paddingHorizontal: horizontalScale(5) },
    indicatorContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(10)
    },
    indicator: {
        width: verticalScale(8),
        aspectRatio: 1,
        // height: 8,
        marginRight: horizontalScale(8),
        backgroundColor: 'gray',
        borderRadius: moderateScale(100),
    },
    activeIndicator: {
        width: verticalScale(8),
        // height: 8,
        aspectRatio: 1,
        backgroundColor: 'green',
        position: 'absolute',
        borderRadius: moderateScale(100)
    }
})

export default Carousel