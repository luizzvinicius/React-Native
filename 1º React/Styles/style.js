import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    backgroundColor: '#999999'
  },

  flex: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '100%'
  },

  border: {
    borderWidth: 2,
    borderColor: 'orange',
    borderTopWidth: 30,
    borderRightWidth: 7,
    borderBottomWidth: 10,
    borderLeftWidth: 7,
  },

  texto: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 3
  },

  image: {
    height: 400,
    width: 350,
    // resizeMode: 'center',
  },
})