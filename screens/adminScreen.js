import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from "react-native";
import Card from "../components/Card";

export default function AdminProcessesMenu() {
  const pressHandler = () => {};

  return (
    <ImageBackground
      source={require("../assets/white_bg.jpg")}
      style={styles.background}
    >
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionText}> Procesos administrativos </Text>
        <Card pressHandler={pressHandler}>
          <Text style={styles.cardTitle}>Becas</Text>
        </Card>
        <Card pressHandler={pressHandler}>
          <Text style={styles.cardTitle}>Inclusión</Text>
        </Card>
        <Card pressHandler={pressHandler}>
          <Text style={styles.cardTitle}>Reconocimiento de materias</Text>
        </Card>
        <View style={{ width: 200, height: 200 }}></View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionText: {
    flex: 1,
    marginTop: "15%",
    marginBottom: "10%",
    marginHorizontal: "5%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "normal",
    fontFamily: "Nunito_700Bold",
    color: "#333",
  },
  cardTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
