import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactsList from './components/ContactsList';
import Header from './components/Header';
import MenuList from './components/MenuList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ContactsList
        content= "Escuela de Computación"
        type= 'Computación'
      />
      {/* Can be used later to access each contact info
      <MenuList 
        content = "Información de contacto"
      />*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
