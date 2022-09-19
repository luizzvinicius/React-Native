import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    color: '#fff',
  },

  display: {
    backgroundColor: '#c0c0c0',
  },

  cont: {
    fontSize: 40,
    color: '#000',
    textAlign: 'right',
    marginRight: 30,
    
  },

  diplayMargin: {
    marginBottom: 15
  },
  
  buttonWidth: {
    width: '70%',
    flex: 1,
    justifyContent: 'center',
  },

  buttonMargin: {
    marginBottom: 5
  },

  borderRadius: {
    borderRadius: 8
  },

  SemaforoContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 15,
    gap: 10,
    borderRadius: 8,
    
  },

  luz: {
    width: 70,
    height: 70,
    borderRadius: 140,
    borderWidth: 2,
    borderColor: '#fff'
  },
})