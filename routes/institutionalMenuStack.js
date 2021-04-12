import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import InstitutionalMenu from "../screens/institutionalMenuScreen";
import Header from "../components/Header";

const { Navigator, Screen } = createStackNavigator();

const InstitutionalMenuStack = ({ navigation }) => (
  <Navigator
    initialRouteName="InstitutionalMenuStack"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        height: 70,
      },
      headerTintColor: "#444",
    }}
  >
    <Screen
      name="InstitutionalMenu"
      component={InstitutionalMenu}
      options={{
        headerTitle: () => (
          <Header navigation={navigation} title="Menú institucional" />
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

export default InstitutionalMenuStack;
