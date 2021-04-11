import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AdminProcessesMenu from "../screens/adminScreen";
import Header from "../components/Header";

const { Navigator, Screen } = createStackNavigator();

const AdminProcessesStack = ({ navigation }) => (
  <Navigator
    initialRouteName="AdminStack"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        height: 70,
      },
      headerTintColor: "#444",
    }}
  >
    <Screen
      name="AdminProcessesMenu"
      component={AdminProcessesMenu}
      options={{
        headerTitle: () => (
          <Header navigation={navigation} title="Procesos Administrativos" />
        ),
        headerBackground: () => (
          <Image
            source={require("../assets/blue_bg.png")}
            style={{ width: "100%", height: "100%" }}
          />
        ),
      }}
    />
  </Navigator>
);

export default AdminProcessesStack;
