import React, { useState } from "react";
import { View, Text, FlatList, Dimensions, Image } from "react-native";
import ContactItem from "../ContactItem";
import styles from "./styles";
// import contacts from "./contacts";

const ContactsList = (props) => {
  const { content, type } = props;

  const [contacts, setContacts] = useState([
    {
      type: "Computación",
      description: "Director",
      email: "rcortes@tec.ac.cr",
      number: "25502380",
      id: "1",
    },
    {
      type: "Computación",
      description: "Técnico en Administración",
      email: "nnavarro@tec.ac.cr",
      number: "25502687",
      id: "2",
    },
    {
      type: "Computación",
      description: "Secretaria",
      email: "dohernandez@tec.ac.cr",
      number: "25502687",
      id: "3",
    },
    {
      type: "Computación",
      description: "Profesional en Administración",
      email: "aurobles@tec.ac.cr",
      number: "25502555",
      id: "4",
    },
    {
      type: "Biología",
      description: "M.Eng. Carlos Alvarado Ulloa",
      email: "calvarado@tec.ac.cr",
      number: "25502479",
      id: "5",
    },
    {
      type: "Biología",
      description: "Beatriz Bonilla Brenes",
      email: "bbonilla@tec.ac.cr",
      number: "25509028",
      id: "6",
    },
    {
      type: "Registro",
      description: "Rendimiento Académico",
      email: "carias@tec.ac.cr",
      number: "25502669",
      id: "7",
    },
    {
      type: "Registro",
      description: "Graduaciones",
      email: "mguzman@tec.ac.cr",
      number: "25502030",
      id: "8",
    },
    {
      type: "Física",
      description: "Alberto Agüero Velazco",
      email: "aaguero@tec.ac.cr",
      number: "25502765",
      id: "9",
    },
    {
      type: "Física",
      description: "Álvaro Amador Jara",
      email: "aamador@tec.ac.cr",
      number: "25502294",
      id: "10",
    },
    {
      type: "Física",
      description: "Luis Araya Solano",
      email: "luaraya@tec.ac.cr",
      number: "25503412",
      id: "11",
    },
    {
      type: "Contable",
      description: "Recuperación de préstamos",
      email: "dabarca@tec.ac.cr",
      number: "25502487",
      id: "12",
    },
    {
      type: "Contable",
      description: "Trámites contables",
      email: "aarias@tec.ac.cr",
      number: "25502429",
      id: "13",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contactsList}
        keyExtractor={(item) => item.id}
        data={contacts}
        renderItem={({ item }) => <ContactItem contact={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ContactsList;
