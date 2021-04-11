import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "../screens/contactScreen";
import Header from "../components/Header";

const { Navigator, Screen } = createStackNavigator();

const ContactsStack = ({ navigation }) => (
  <Navigator
    initialRouteName="ContactsStack"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        height: 70,
      },
      headerTintColor: "#444",
    }}
  >
    <Screen
      name="Contacts"
      component={Contacts}
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
  </Navigator>
);

export default ContactsStack;
