import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#121212', // cinza
    flexDirection: 'column',
    alignItems: "stretch",
    justifyContent: 'center',
  },

  title: {
    textAlign:"center",
    fontSize: 40,
    marginTop: 50,
    color: '#003466',
  },

  display: {
    backgroundColor: '#c0c0c0',
  },

  cont: {
    fontSize: 40,
    color: '#000',
    textAlign: 'right',
    marginRight: 30,
  }
})