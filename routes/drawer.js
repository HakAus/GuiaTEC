import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContactsStack from "./contactsStack";
import AdminProcessesStack from "./adminStack";
import ScheduleStack from "./ScheduleStack"

const DrawerNavigator = () => {
  const { Navigator, Screen } = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="AdminProcessesStack">
        <Screen name="Información de contacto" component={ContactsStack} />
        <Screen
          name="Procesos Administrativos"
          component={AdminProcessesStack}
        />
        <Screen
          name="Horarios de buses"
          component={ScheduleStack}
          
        />
      </Navigator>
    </NavigationContainer>
  );
};
export default DrawerNavigator;
