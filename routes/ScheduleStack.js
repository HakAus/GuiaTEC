import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import TecCartago from "../screens/HorarioTecCartago";
import CartagoTec from "../screens/HorarioCartagoTec";
import MenuHorarios from "../screens/MenuHorarios";

const { Navigator, Screen } = createStackNavigator();

const ScheduleStack = ({ navigation }) => (
  <Navigator
    initialRouteName="ScheduleStack"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        height: 70,
      },
      headerTintColor: "#444",
    }}
  >
    <Screen
      name="MenuHorarios"
      component={MenuHorarios}
      options={{
        headerShown: false,
        headerTitle: () => (
          <Header navigation={navigation} title="Menu Horario Buses" />
        ),
      }}
    />
    <Screen
      name="TecCartagoSchedule"
      component={TecCartago}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="CartagoTecSchedule"
      component={CartagoTec}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

export default ScheduleStack;
