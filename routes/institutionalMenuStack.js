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
        headerShown: false,
      }}
    />
  </Navigator>
);

export default InstitutionalMenuStack;
