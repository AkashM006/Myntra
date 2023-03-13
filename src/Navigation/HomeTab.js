import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../Screens/HomeScreen'

const Tab = createBottomTabNavigator()

function HomeTab(){
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={HomeScreen}
                options={{
                    header:() => {},
                }}
             />
        </Tab.Navigator>
    )
}

export default HomeTab