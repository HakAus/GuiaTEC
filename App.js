import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'




const Stack = createStackNavigator()

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu_Principal"
          component={HomeScreen}
        />
        <Stack.Screen name="Menu_Institucional" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const Menu_Principal = ({navigation}) => {
  return (
    <NavigationContainer>
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
        onPress={() => navigation.navigate('Menu_Institucional')}


      >
        <Text style={styles.buttontext} >Menu Institucional </Text>

      </TouchableOpacity>
    </View>
    </NavigationContainer>
  );
};





const Menu_Institucional = () => {
  return (
    <NavigationContainer>
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
    </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#FFFFFF" },
  title: { fontSize: 40, color: "black" },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#002855",
    padding: 7,
    marginTop: 50,
    alignSelf: 'stretch'
  },

  buttontext: {
    justifyContent: 'center',
    alignItems: 'center',
    
    color: "white",
    fontSize: 30



  }
});

export default Menu_principal;