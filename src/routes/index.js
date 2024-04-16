import { createStackNavigator } from '@react-navigation/stack'
import { CreateContact, Detail, Home, Screen } from '../pages'

const Stack = createStackNavigator()

const Routes = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
              <Stack.Screen
                name="Screen"
                component={Screen}
                options={{ title: 'Screen' }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="CreateContact"
                component={CreateContact}
                options={{ title: 'CreateContact' }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ title: 'Detail' }}
            />
        </Stack.Navigator>
    )
}

export default Routes