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
        headerShown: false,
      }}
    />
  </Navigator>
);

export default ContactsStack;
