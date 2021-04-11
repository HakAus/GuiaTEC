import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Card from "../components/Card";

export default function AdminProcessesMenu({ navigation }) {
  const goToBecas = () => {
    navigation.navigate("Becas");
  };
  const goToInclusion = () => {
    navigation.navigate("Inclusion");
  };
  const goToReconocimiento = () => {
    navigation.navigate("Reconocimiento");
  };

  return (
    <ImageBackground
      source={require("../assets/white_bg.jpg")}
      style={styles.background}
    >
      <View style={styles.view}>
        <Text style={styles.sectionText}> Pasos para el proceso de beca </Text>
        <Card pressHandler={goToBecas} style={styles.redButton}>
          <Text style={styles.cardTitle}>Becas</Text>
        </Card>
        <Card pressHandler={goToInclusion} style={styles.redButton}>
          <Text style={styles.cardTitle}>Inclusión</Text>
        </Card>
        <Card pressHandler={goToReconocimiento} style={styles.redButton}>
          <Text style={styles.cardTitle}>Reconocimiento de materias</Text>
        </Card>
        <View style={{ width: 200, height: 200 }}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionText: {
    flex: 1,
    marginTop: "10%",
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
  redButton: {
    backgroundColor: "#ef3340",
  },
});
