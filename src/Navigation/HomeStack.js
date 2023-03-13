import { createStackNavigator } from "@react-navigation/stack";
import HomeTab from './HomeTab'

const Stack = createStackNavigator()

function HomeStack(){
    return (
        <Stack.Navigator initialRouteName="main">
            <Stack.Screen
                name='main'
                component={HomeTab}
                options={{
                    header: () => {}
                }}
             />
        </Stack.Navigator>
    )
}

export default HomeStack