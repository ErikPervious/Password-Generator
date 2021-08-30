import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E1e1e1'
  },
  area: {
    marginVertical: 15,
    backgroundColor: '#2E2E2E',
    width: '80%',
    borderRadius: 7
  },
  containerOption: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginBottom: 20
  }, 
  areaOption: {
    width: '48%',
    padding: 8,
    backgroundColor: '#2E2E2E',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },
  optionText: {
    color: '#FFF',
    fontSize: 17,
  },
  button: {
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#121212'
  },
  password: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    color: '#e1e1e1'
  },
  eye: {
    position: 'absolute',
    right: 5,
    top: 8,
  }
})

export default styles;