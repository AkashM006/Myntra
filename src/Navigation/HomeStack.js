import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../Screens/DetailsScreen";
import ListScreen from "../Screens/ListScreen";
import HomeTab from './HomeTab'

const Stack = createStackNavigator()

function HomeStack(){

    const options = {
        header: () => {}
    }

    return (
        <Stack.Navigator initialRouteName="main">
            <Stack.Screen
                name='main'
                component={HomeTab}
                options={options}
             />
             <Stack.Screen
                name='list'
                component={ListScreen}
                options={options}
            />
            <Stack.Screen
                name='detail'
                component={DetailScreen}
                options={options}
            />
        </Stack.Navigator>
    )
}

export default HomeStack