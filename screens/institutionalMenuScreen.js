import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function InstitutionalMenu() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>TEC - Cartago</Text>
        <Text style={styles.title2}>Menu Institucional</Text>
        <TouchableOpacity
          //onPress={() => Alert.alert('Hello')}
          style={styles.button2}
        >
          <Text style={styles.buttontext2}>
            {" "}
            Mañana -- 8am a 10am {"\n"} Café ₡200 Pinto ₡300 {"\n"} Fresco ₡200
            Fruta ₡200{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          //onPress={() => Alert.alert('Hello')}
          style={styles.button2}
        >
          <Text style={styles.buttontext2}>
            {" "}
            Tarde -- 11am a 2pm{"\n"} Sopa azteca ₡800{"\n"}Arroz ₡100 Frijoles
            ₡200{"\n"}Fresco ₡200 Fruta ₡200
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          //onPress={() => Alert.alert('Hello')}
          style={styles.button2}
        >
          <Text style={styles.buttontext2}>
            {" "}
            Merienda 3pm{"\n"}Café ₡200 Arepa ₡200{"\n"}Fresco ₡200 Fruta ₡200
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          //onPress={() => Alert.alert('Hello')}
          style={styles.button2}
        >
          <Text style={styles.buttontext2}>
            {" "}
            Noche -- 5pm a 6:30pm{"\n"} Pollo en salsa caribeña ₡800{"\n"} Arroz
            ₡100 Frijoles ₡200{"\n"} Fresco ₡200 Fruta ₡200
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: { fontSize: 40, color: "black" },
  title2: { fontSize: 20, color: "black" },
  button: {
    backgroundColor: "#002855",
    padding: 7,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    width: "98%",
  },
  button2: {
    backgroundColor: "#002855",
    padding: 7,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    width: "90%",
  },
  buttontext: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 30,
  },
  buttontext2: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 22,
  },
});
