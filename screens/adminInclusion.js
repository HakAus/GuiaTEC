import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SectionList,
} from "react-native";
import Card from "../components/Card/index";

export default function AdminInclusion({ navigation, route }) {
  const Item = ({ subtitle, text }) => (
    <Card>
      <View style={styles.sectionItem}>``
        <Text style={styles.cardTitle}>{subtitle}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Card>
  );

  const DATA = [
    {
      title: "Paso 1",
      subtitle: "Subtitle",
      data: ["Some words"],
    },
    {
      title: "Paso 2",
      subtitle: "Subtitle",
      data: ["Some words"],
    },
    {
      title: "Paso 3",
      subtitle: "Subtitle",
      data: ["Some words"],
    },
    {
      title: "Paso 4",
      subtitle: "Subtitle",
      data: ["Some words"],
    },
  ];

  return (
    <ImageBackground
      source={require("../assets/white_bg.jpg")}
      style={styles.background}
    >
      <SectionList
        sections={DATA}
        style={styles.sectionList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ section }) => (
          <Item subtitle={section.subtitle} text={section.data} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  sectionList: {
    flex: 1,
    width: "100%",
  },
  sectionItem: {
    flex: 1,
  },
  sectionTitle: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "5%",
    marginHorizontal: "5%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "normal",
    fontFamily: "Nunito_700Bold",
    color: "#333",
  },
  text: {
    fontFamily: "Nunito_400Regular",
    textAlign: "left",
  },
  cardTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardStyles: {},
});
