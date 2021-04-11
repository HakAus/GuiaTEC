import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Button, ScrollView } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,



} from "@expo-google-fonts/nunito"





function HomeScreen({ navigation }) {
  return (
    <ScrollView >
    <View style={styles.container}>
      
      <Text style={styles.title}>Menu Principal</Text>

      <TouchableOpacity
        //onPress={() => Alert.alert('Hello')}
        style={styles.button}
      >
        <Text style={styles.buttontext} >Procesos administrativos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        //onPress={() => Alert.alert('Hello')}
        style={styles.button}
      >
        <Text style={styles.buttontext} >Horario de buses </Text>
      </TouchableOpacity>
      <TouchableOpacity
        //onPress={() => Alert.alert('Hello')}
        style={styles.button}
      >
        <Text style={styles.buttontext} >Mapa del TEC </Text>
      </TouchableOpacity>
      <TouchableOpacity
        //onPress={() => Alert.alert('Hello')}
        style={styles.button}
      >
        <Text style={styles.buttontext} >Informacion de contacto </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Menu Principal")}
      >
        <Text style={styles.buttontext} >Menu Institucional </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}


function menu_comida() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>TEC - Cartago</Text>
      <Text style={styles.title2}>Menu Institucional</Text>
      <TouchableOpacity
        //onPress={() => Alert.alert('Hello')}
        style={styles.button2}
      >
        <Text style={styles.buttontext2} >   Mañana -- 8am a 10am {"\n"}   Café ₡200   Pinto ₡300 {"\n"}  Fresco ₡200   Fruta ₡200 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        //onPress={() => Alert.alert('Hello')}
        style={styles.button2}
      >
        <Text style={styles.buttontext2} >   Tarde -- 11am a 2pm{"\n"}       Sopa azteca ₡800{"\n"}Arroz ₡100   Frijoles ₡200{"\n"}Fresco ₡200   Fruta ₡200</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //onPress={() => Alert.alert('Hello')}
        style={styles.button2}
      >
        <Text style={styles.buttontext2} >         Merienda 3pm{"\n"}Café ₡200   Arepa ₡200{"\n"}Fresco ₡200   Fruta ₡200</Text>
      </TouchableOpacity>
      <TouchableOpacity
        //onPress={() => Alert.alert('Hello')}
        style={styles.button2}
      >
        <Text style={styles.buttontext2} >      Noche -- 5pm a 6:30pm{"\n"} Pollo en salsa caribeña ₡800{"\n"}    Arroz ₡100  Frijoles ₡200{"\n"}    Fresco ₡200  Fruta ₡200</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu Principal" component={menu_comida} />
      </Stack.Navigator>
    </NavigationContainer>
  )



}


/*const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GuiaTEC</Text>

      <TouchableOpacity
        //color="#002855"
        //title="Procesos administrativos"
        onPress={() => Alert.alert('Hello')}
        style={styles.button}

      >
        <Text style={styles.buttontext} >Procesos administrativos</Text>

      </TouchableOpacity>


      <TouchableOpacity
        //color="#002855"
        //title="Procesos administrativos"
        onPress={() => Alert.alert('Hello')}
        style={styles.button}

      >
        <Text style={styles.buttontext} >Horario de buses </Text>

      </TouchableOpacity>

      <TouchableOpacity
        //color="#002855"
        //title="Mapa del TEC"
        onPress={() => Alert.alert('Hello')}
        style={styles.button}

      >
        <Text style={styles.buttontext} >Mapa del TEC </Text>

      </TouchableOpacity>
      <TouchableOpacity
        //color="#002855"
        //title="Informacion de contacto"
        onPress={() => Alert.alert('Hello')}
        style={styles.button}

      >
        <Text style={styles.buttontext} >Informacion de contacto </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Hello')}


      >
        <Text style={styles.buttontext} >Menu Institucional </Text>

      </TouchableOpacity>
    </View>
  );
};



*/

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#FFFFFF" },
  title: { fontSize: 40, color: "black" },
  title2: { fontSize: 20, color: "black" },
  button: {
    backgroundColor: "#002855",
    padding: 7,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    width: "98%"
  },




  button2: {
    backgroundColor: "#002855",
    padding: 7,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    width: "90%"
  },

  buttontext: {
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
    fontSize: 30,
    //fontFamily: "Nunito_700Bold"



  }
  ,


  buttontext2: {
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
    fontSize: 22,



  }
});

//export default app;

