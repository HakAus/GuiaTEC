import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import DropDownList from "../components/DropDownList";

export default function AdminProcessesMenu() {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.sectionText}> Procesos administrativos </Text>
      <DropDownList />
      <View style={{ width: 200, height: 200 }}></View>
    </ScrollView>
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
    color: "#000000",
  },
});
