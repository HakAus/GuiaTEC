import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

const administrativeProcessesSelectionPage = function () {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.sectionText}>Procesos administrativos</Text>
      </View>
      <DropDownPicker
        items={[
          {
            label: "Becas",
            value: "becas",
            icon: () => (
              <Icon name="arrow-right-circle" size={18} color="#dc4649" />
            ),
          },
          {
            label: "Inclusión",
            value: "inclu",
            icon: () => (
              <Icon name="arrow-right-circle" size={18} color="#dc4649" />
            ),
          },
          {
            label: "Reconocimiento de materias",
            value: "recon",
            icon: () => (
              <Icon name="arrow-right-circle" size={18} color="#dc4649" />
            ),
          },
        ]}
        containerStyle={{
          height: 40,
          marginLeft: 50,
          marginRight: 50,
          color: "#133982",
        }}
        style={{
          backgroundColor: "#133982",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{
          backgroundColor: "#fafafa",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        onChangeItem={(item) =>
          this.setState({
            country: item.value,
          })
        }
        placeholder="Seleccione una categoría"
        placeholderStyle={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#ffffff",
        }}
      />
    </ScrollView>
  );
};
export default function App() {
  console.log(typeof "dfd");
  return administrativeProcessesSelectionPage();
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
    color: "000000",
  },
});
