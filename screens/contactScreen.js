import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ContactsList from "../components/ContactsList";
import Header from "../components/Header";
import MenuList from "../components/MenuList";

export default function Contacts() {
  return (
    <View style={styles.container}>
      <Header />
      <ContactsList content="Contactos" type="Computación" />
      {/* Can be used later to access each contact info */}
      {/* <MenuList content="Información de contacto" /> */}
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
});
