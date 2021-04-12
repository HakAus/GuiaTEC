import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import HomeScreen from "../screens/homeScreen";
import ContactsStack from "./contactsStack";
import AdminProcessesStack from "./adminStack";
import InstitutionalMenuStack from "./institutionalMenuStack";
import ScheduleStack from "./ScheduleStack";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 70,
        },
        headerTintColor: "#444",
      }}
    >
      <Screen
        name="Menú principal"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="Menú principal" />
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
        name="Información de contacto"
        component={ContactsStack}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="Información de contacto" />
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
        name="Procesos Administrativos"
        component={AdminProcessesStack}
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
        name="Menú institucional"
        component={InstitutionalMenuStack}
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
      <Screen
        name="Horarios de buses"
        component={ScheduleStack}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="Horarios de buses" />
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
  </NavigationContainer>
);

export default HomeStack;
