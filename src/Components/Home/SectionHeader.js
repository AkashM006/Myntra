import { StyleSheet, Image, TouchableOpacity, FlatList, View } from 'react-native'
import React from 'react'
import Skeleton from '../Reusable/Skeleton'
import { useNavigation } from '@react-navigation/native'
import CustomText from '../Reusable/CustomText'
import { useSelector } from 'react-redux'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'

const SectionHeader = ({ sections }) => {

    const navigation = useNavigation()
    const { colors } = useSelector(state => state.theme)

    const renderCard = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.card} key={index} onPress={() => navigation.navigate('List', {
                title: item.name,
                id: item.id
            })} >
                <Image style={styles.image} source={{ uri: item.photoURL }} />
                <CustomText size={10} style={styles.text}>{item.name.toUpperCase()}</CustomText>
            </TouchableOpacity>
        )
    }

    const renderSkeleton = () => <Skeleton height={verticalScale(70)} width={horizontalScale(60)} borderRadius={moderateScale(8)} />

    if (sections[0].data.length === 0) {
        let data = Array(10).fill(1)
        return <View style={styles.outerContainer}>
            <FlatList
                horizontal
                style={[styles.list, { backgroundColor: colors['LIGHT'] }]}
                contentContainerStyle={styles.container}
                data={data}
                renderItem={renderSkeleton}
                keyExtractor={(item, index) => index}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    }
    let data = sections[0].data[0]
    return (
        <View style={styles.outerContainer}>
            <FlatList
                horizontal
                style={[styles.list, { backgroundColor: colors['LIGHT'] }]}
                contentContainerStyle={[styles.container, { backgroundColor: colors['LIGHT'] }]}
                data={data}
                renderItem={renderCard}
                keyExtractor={(item, index) => index}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: verticalScale(65),
        aspectRatio: 1,
        borderRadius: moderateScale(1000),
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    container: {
        marginTop: verticalScale(5),
        paddingLeft: horizontalScale(15),
        paddingVertical: verticalScale(5)
    },
    text: {
        textAlign: 'center',
        marginTop: verticalScale(2)
    },
    card: { marginRight: horizontalScale(15), height: verticalScale(80) },
    list: { paddingBottom: verticalScale(5), },
    outerContainer: {
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: moderateScale(1),
    }
})

export default SectionHeader