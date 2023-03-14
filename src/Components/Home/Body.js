import { SectionList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Config from 'react-native-config'
import { useSelector } from 'react-redux'
import Carousel from './Carousel'
import SectionHeader from './SectionHeader'
import Photo from './Photo'
import Slider from './Slider'
import Grid from './Grid'
import Quote from '../Reusable/Quote'
import CustomLoader from '../Reusable/CustomLoader'
import { verticalScale } from '../../utils/Metrics'

const Body = () => {

  const [sections, setSections] = useState([{ data: [], title: 'Section Title' }])
  const [loading, setLoading] = useState(true)

  const getData = async _ => {
    try {
      let temp = {}
      let data = []
      temp = await axios.get(`${Config.API_KEY}/home/categoriesm`)
      if (temp) data = temp.data
      let headerSection = []
      if (data.data)
        headerSection = data.data.map(item => ({ id: item.categoryId, name: item.categoryName, photoURL: item.image }))
      // let result = (await firestore().collection('gallery').orderBy('position').get()).docs
      let result = []
      let contents = []
      if (result) contents = result.map(el => el._data)

      setSections(prev => [{ data: [...prev[0].data, headerSection, ...contents], title: 'Section Title' }])
      setLoading(false)

    } catch (err) {
      console.log("Error in HomeScreen.js: ", err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const { colors } = useSelector(state => state.theme)

  const renderItem = ({ item, index }) => {

    if (item === null || item == undefined) return

    else if (index === 0) return

    else if (item.type === 'photo') return <Photo link={item.url} title={item.title} height={item.height} index={index} />

    else if (item.type === 'slider') return <Slider card={item} />

    else if (item.type === 'grid') return <Grid item={item} />

    else if (item.type === 'carousel') return <Carousel item={item} />

  }


  const renderSectionHeader = _ => {
    return <SectionHeader sections={sections} />
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors['LIGHT'] }}>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        renderSectionHeader={renderSectionHeader}
        stickyHeaderHiddenOnScroll={true}
        stickySectionHeadersEnabled={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <Quote loading={loading} />}
      />
      {loading && <View style={styles.loaderContainer}><CustomLoader /></View>}
    </View>
  )
}

const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: verticalScale(120)
    }
})

export default Body