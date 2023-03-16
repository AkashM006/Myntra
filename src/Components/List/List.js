import { FlatList, InteractionManager, StyleSheet, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import axios from 'axios'
import Config from 'react-native-config'
import { useRoute } from '@react-navigation/native'
import {verticalScale} from '../../utils/Metrics'
import CustomLoader from '../Reusable/CustomLoader'
import ListHeader from './ListHeader'
import Footer from './Footer'
import ListFooter from './ListFooter'
import Card from './Card'
import Progressor from './Progressor'
import { useSelector } from 'react-redux'

const List = () => {

    const [count, setCount] = useState(null)
    const [clothes, setClothes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const height = useWindowDimensions().height
    const id = useRoute().params?.id ?? 1

    const {colors} = useSelector(state => state.theme)

    const getData = async () => {
        if (count !== null && clothes.length >= count) return
        axios.get(`${Config.API_KEY}/product/allm/${id}`)
            .then(res => {
                let data = res.data
                if (data.status === false) {
                    console.log("Error: ", data.message)
                    return
                }
                data = data.data
                if (count === null) setCount(data.length * 10)

                let temp = data.map(cloth => ({
                    ...cloth.product,
                    photo: cloth.imageUrl
                }))
                setClothes(prev => [...prev, ...temp])
                if (isLoading === true) setIsLoading(false)
            })
            .catch(err => {
                console.log("Err: ", err)
                if (isLoading === true) setIsLoading(false)
            })
    }

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            getData()
        })
    }, [])

    const renderItem = ({ item, index }) => <Card index={index} cloth={item} />

    const endReachedHandler = () => getData()

    const cardHeight = (height - verticalScale(65)) / 2

    const scrollRef = useRef()

    const scrollToTop = () => { scrollRef?.current.scrollToOffset({ offset: 0, animated: true }) }

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 40,
        waitForInteraction: false
    })

    const [currentItem, setCurrentItem] = useState(0)

    const viewableItemsChangedHandler = useCallback(({ viewableItems }) => {
        let len = viewableItems.length
        if (len > 0) setCurrentItem((viewableItems[len - 1].index + 1))
    }, [])

    return (
        <>
            <ListHeader itemCount={count} />
            <View style={[styles.container,{ backgroundColor: colors['LIGHT'] }]}>
                {isLoading === false && <FlatList
                    data={clothes}
                    renderItem={renderItem}
                    ref={scrollRef}
                    keyExtractor={(item, index) => index}
                    numColumns={2}
                    style={styles.list}
                    ListFooterComponent={() => <ListFooter maxCount={count} count={clothes.length} />}
                    onEndReached={endReachedHandler}
                    onEndReachedThreshold={1}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews
                    maxToRenderPerBatch={6}
                    getItemLayout={(data, index) => ({
                        length: cardHeight,
                        offset: (index) * cardHeight,
                        index,
                    })}
                    viewabilityConfig={viewabilityConfig.current}
                    onViewableItemsChanged={viewableItemsChangedHandler}
                />}
                {isLoading && <View style={styles.loaderContainer}>
                    <CustomLoader />
                </View>}
                {!isLoading && <Progressor goTop={scrollToTop} count={count} items={currentItem} />}
                { !isLoading && <Footer />}
                </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1},
    list: { marginTop: verticalScale(5) },
    loaderContainer: { marginTop: verticalScale(10), }
})

export default List