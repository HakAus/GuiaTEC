import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import DrawerNavigator from "./routes/drawer";
import HomeStack from "./routes/homeStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <HomeStack />;
  }
}
