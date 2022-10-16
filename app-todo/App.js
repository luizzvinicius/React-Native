import { createStackNavigator } from '@react-navigation/stack'
import FormScreen from './src/screen/FormScreen'
import Home from './src/screen/Home';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator()

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='FormScreen' component={FormScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}