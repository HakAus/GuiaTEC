import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, View, FlatList } from "react-native";
import DropDownList from "./components/DropDownList";

const administrativeProcessesSelectionPage = function () {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.sectionText}> Procesos administrativos </Text>
      <DropDownList />
      <View style={{ width: 200, height: 200 }}></View>
    </ScrollView>
  );
};

export default function App() {
  return administrativeProcessesSelectionPage();
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
    color: "#000000",
  },
});
