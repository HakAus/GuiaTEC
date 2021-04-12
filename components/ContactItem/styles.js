import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  contactContainer: {
    width: "90%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
  department: {
    color: "#EF3340",
    fontSize: 20,
    fontWeight: "500",
    justifyContent: "center",
  },
  titles: {
    marginTop: "5%",
    width: "100%",
  },

  title: {
    color: "#002855",
    fontSize: 20,
    fontWeight: "500",
    justifyContent: "center",
  },

  number: {
    fontSize: 20,
    color: "#5c5e62",
    textDecorationLine: "underline",
  },

  email: {
    fontSize: 20,
    color: "#5c5e62",
    textDecorationLine: "underline",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  mail: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 10,
  },
  phone: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 10,
  },
});

export default styles;
