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
            label: "USA",
            value: "usa",
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: "UK",
            value: "uk",
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: "France",
            value: "france",
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
        ]}
        defaultValue={"usa"}
        containerStyle={{ height: 40, marginLeft: 50, marginRight: 50 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{
          backgroundColor: "#fafafa",
        }}
        onChangeItem={(item) =>
          this.setState({
            country: item.value,
          })
        }
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
