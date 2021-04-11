import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import TecCartago from "../screens/Horarios";

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
      name="TecCartagoSchedule"
      component={TecCartago}
      options={{
        headerTitle: () => (
          <Header navigation={navigation} title="Tec cartago" />
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

export default ScheduleStack;