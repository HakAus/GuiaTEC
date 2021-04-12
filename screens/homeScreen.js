import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/white_bg.jpg")}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Menu Principal</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Procesos Administrativos")}
            style={styles.button}
          >
            <Text style={styles.buttontext}>Procesos administrativos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Horarios de buses")}
            style={styles.button}
          >
            <Text style={styles.buttontext}>Horario de buses </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Información de contacto")}
            style={styles.button}
          >
            <Text style={styles.buttontext}>Informacion de contacto </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Menú institucional")}
          >
            <Text style={styles.buttontext}>Menu Institucional </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { marginTop: 10, fontSize: 35, color: "black" },
  title2: { fontSize: 20, color: "black" },
  button: {
    backgroundColor: "#002855",
    padding: 7,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    width: "90%",
  },
  button2: {
    backgroundColor: "#002855",
    padding: 7,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    width: "90%",
  },
  buttontext: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 20,
  },
  buttontext2: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 22,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
