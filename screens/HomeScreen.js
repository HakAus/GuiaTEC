import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Button, ScrollView } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,



} from "@expo-google-fonts/nunito"





export default function HomeScreen({ navigation }) {
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