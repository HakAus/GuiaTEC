import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  touchableCard: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#222",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 6,
  },
  touchableCardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});

export default styles;
