import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     paddingTop: 40,
//     zIndex: 100,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingHorizontal: 20,
//     backgroundColor: '#002855',
//     height: 80,
//     alignItems: 'center'
//   },
//   logo: {
//     width: 30,
//     height: 25,
//     resizeMode: 'contain',
//   },
//   menu: {
//     width: 25,
//     height: 25,
//     resizeMode: 'contain',
//   },
//   hat:{
//     width: 30,
//     height: 25,
//     resizeMode: 'contain',
//   },
//   title:{
//     color: 'white',
//     fontSize: 20,
//     fontWeight: '500',

//   },
// });

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    letterSpacing: 1,
  },
  icon: {
    color: "#fff",
  },
  headerImage: {
    width: 26,
    height: 26,
  },
  headerTitle: {
    flexDirection: "row",
  },
});

export default styles;
