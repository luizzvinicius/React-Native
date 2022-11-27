import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screen/Home'
import FormScreen from './src/screen/FormScreen'

const { Navigator, Screen } = createStackNavigator()

// export NODE_OPTIONS=--openssl-legacy-provider caso der erro de ssl

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
        <Screen name='Home' component={Home} />
        <Screen name='FormScreen' component={FormScreen} />
      </Navigator>

    </NavigationContainer>
  )
}