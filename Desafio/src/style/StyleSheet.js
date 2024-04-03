import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },

  input: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
  },

  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },

  button1: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    borderColor: "red",
    borderWidth: 1,
  },

  buttonText1: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
  },

  modal: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },

  imagemodal: {
    width: 100,
    height: 100,
    borderRadius: 50,
    left: 120,
  },

  TitleText: {
    color: "green",
    fontSize: 30,
  },

  middletext: {
    color: "white",
    fontSize: 20,
    marginTop: 15,
    fontWeight: "bold",
  },

  modalText: {
    fontSize: 15,
    color: "white",
  },
});

export default Styles;
