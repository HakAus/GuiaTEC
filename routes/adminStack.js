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
    <Screen
      name="Becas"
      component={AdminScholarship}
      options={{
        headerTitle: () => <Header navigation={navigation} title="Becas" />,
        headerBackground: () => (
          <Image
            source={require("../assets/blue_bg.png")}
            style={{ width: "100%", height: "100%" }}
          />
        ),
      }}
    />
    <Screen
      name="Inclusion"
      component={AdminInclusion}
      options={{
        headerTitle: () => <Header navigation={navigation} title="Inclusión" />,
        headerBackground: () => (
          <Image
            source={require("../assets/blue_bg.png")}
            style={{ width: "100%", height: "100%" }}
          />
        ),
      }}
    />
    <Screen
      name="Reconocimiento"
      component={AdminRecognition}
      options={{
        headerTitle: () => (
          <Header navigation={navigation} title="Reconocimiento de materias" />
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
