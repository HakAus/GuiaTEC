import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContactsStack from "./contactsStack";
import AdminProcessesStack from "./adminStack";

const DrawerNavigator = () => {
  const { Navigator, Screen } = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="AdminProcessesStack">
        <Screen name="ContactsStack" component={ContactsStack} />
        <Screen name="AdminProcessesStack" component={AdminProcessesStack} />
      </Navigator>
    </NavigationContainer>
  );
};
export default DrawerNavigator;
