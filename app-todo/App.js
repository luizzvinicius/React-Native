import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container_safe}>
      <View style={styles.container}>
        <View style={styles.icon_container}>
          <Text style={styles.title}>To Do!</Text>
          <Image
            source={require('../app-todo/assets/tick-inside-circle.png')}
            style={{ width: 45, height: 45 }}
          />
        </View>
      </View>

      <Text>
        Icons made by <a href="https://www.flaticon.com/authors/google" title="Google"> Google </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container_safe: {
    backgroundColor: '#2592DA',
    height: '100%',
  },

  container: {
    padding: 20,
    borderWidth: 1,
  },

  title: {
    color: '#fff',
    fontFamily: 'sans-serif',
    fontSize: 40,
  },

  icon_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    borderWidth: 1,
  },
})

// cores 2: #FF6500