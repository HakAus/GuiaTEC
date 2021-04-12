import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AdminProcessesMenu from "../screens/adminScreen";
import AdminScholarship from "../screens/adminScholarship";
import Header from "../components/Header";
import AdminInclusion from "../screens/adminInclusion";
import AdminRecognition from "../screens/adminRecognition";

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
        headerShown: false,
      }}
    />
    <Screen
      name="Becas"
      component={AdminScholarship}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Inclusion"
      component={AdminInclusion}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Reconocimiento"
      component={AdminRecognition}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

export default AdminProcessesStack;
