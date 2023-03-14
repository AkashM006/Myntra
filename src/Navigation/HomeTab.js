import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import HomeScreen from '../Screens/HomeScreen'
import CategoriesScreen from '../Screens/CategoriesScreen'
import ICONS from '../icons/icons'
import { useSelector } from "react-redux";
import CustomText from "../Components/Reusable/CustomText";
import { verticalScale } from "../utils/Metrics";

const Tab = createBottomTabNavigator()

function HomeTab(){

    const {colors} = useSelector(state => state.theme)

    const textColor = {
        true: colors['PRIMARY'],
        false: colors['SHADEDARK']
    }

    const icons = {
        home: {
            true: ICONS.ICON_LOGO,
            false: ICONS.ICON_LOGO_INACTIVE
        },
        categories: {
            true: ICONS.ICON_CATEGORIES,
            false: ICONS.ICON_CATEGORIES_INACTIVE,
        },
        studio: {
            true: ICONS.ICON_STUDIO,
            false: ICONS.ICON_STUDIO_INACTIVE
        },
        explore: {
            true: ICONS.ICON_EXPLORE,
            false: ICONS.ICON_EXPLORE_INACTIVE
        },
        profile: {
            true: ICONS.ICON_PROFILE,
            false: ICONS.ICON_PROFILE_INACTIVE
        }
    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={HomeScreen}
                options={{
                    header:() => {},
                    tabBarLabel: ({focused}) => {
                        return <CustomText weight={focused ? 'bold' : 'light'} color={textColor[focused]}>Home</CustomText>
                    },
                    tabBarLabelPosition: 'below-icon',
                    tabBarIcon: ({focused}) => <TabIcon image={icons['home'][focused]} />
                }}
             />
             <Tab.Screen
                name='categories'
                component={CategoriesScreen}
                options={{
                    header:() => {},
                    tabBarLabel: ({focused}) => {
                        return <CustomText weight={focused ? 'bold' : 'light'} color={textColor[focused]}>Categories</CustomText>
                    },
                    tabBarLabelPosition: 'below-icon',
                    tabBarIcon: ({focused}) => {
                        return <TabIcon focused={focused} image={icons['categories'][focused]} />
                    },
                }}
             />
        </Tab.Navigator>
    )
}

const TabIcon = ({image, focused}) => {
    const {colors} = useSelector(state => state.theme)
    let style = { }

    if(focused !== undefined)
        style.tintColor = focused ? colors['PRIMARY'] : colors['DARK']

    return <Image
                style={[styles.icon, style]}
                source={{uri: image}}
            />
}

const styles = StyleSheet.create({
    icon: {
        aspectRatio: 1,
        resizeMode: 'contain',
        height: verticalScale(20)
    }
})

export default HomeTab