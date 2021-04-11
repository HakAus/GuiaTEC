import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>TEC - Cartago</Text>
      <View style={styles.cardHorarios}>
      <Text >Lunes a Viernes</Text>

      <View style={styles.Horarios}>

      </View>

      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionText: {
    padding: 20,
    fontSize: 40,
    fontFamily: "",
    fontWeight: "normal",
    color: "#000000",
  },

});
