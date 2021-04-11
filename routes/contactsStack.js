import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "../screens/contactScreen";

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
        title: "Contacts",
        // headerTitle: () => <Header navigation={navigation} title="Contacts" />,
        headerBackground: () => (
          <Image
            source={require("../assets/blue_bg.jpg")}
            style={{ width: "100%", height: "100%" }}
          />
        ),
      }}
    />
  </Navigator>
);

export default ContactsStack;
