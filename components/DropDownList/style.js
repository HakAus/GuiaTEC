import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    zIndex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#133982",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  dropDown: {
    flex: 1,
    backgroundColor: "#fafafa",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  item: {
    flex: 1,
    justifyContent: "flex-start",
  },
  placeholder: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },
  childrenContainer: {
    flex: 1,
  },
});

export default styles;
