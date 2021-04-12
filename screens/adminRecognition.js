import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SectionList,
  Button,
  Linking,
} from "react-native";
import Card from "../components/Card";

export default function AdminRecognition({ navigation, route }) {
  const Item = ({ subtitle, text, links, namesLinks }) => {
    if (links !== []) {
      return (
        <Card>
          <View style={styles.sectionItem}>
            <Text style={styles.cardTitle}>{subtitle}</Text>
            <Text style={styles.text}>{text}</Text>
            <View>
              {links.map((item, index) => (
                <View style={styles.button}>
                  <Button
                    title={namesLinks[index]}
                    onPress={() => Linking.openURL(item)}
                  />
                </View>
              ))}
            </View>
          </View>
        </Card>
      );
    } else {
      return (
        <Card>
          <View style={styles.sectionItem}>
            <Text style={styles.cardTitle}>{subtitle}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
        </Card>
      );
    }
  };

  const DATA = [
    {
      title: "Paso 1",
      subtitle: "Descripción",
      data: [
        `Completar el formulario solicitud de equiparación de asignaturas según las fechas establecidas en el Calendario Institucional y Académico

      Debe completar un formulario para cada curso que imparte el TEC y desee reconocer.`,
      ],
      links: ["https://www.tec.ac.cr/calendario-institucional"],
      namesLinks: ["Calendario Institucional y Académico"],
    },
    {
      title: "Paso 2",
      subtitle: "Descripción",
      data: [`Completar el formulario según corresponda:`],
      links: [
        "https://www.tec.ac.cr/formularios/reconocimiento-asignaturas-automaticas-conare",
        "https://www.tec.ac.cr/formularios/solicitud-reconocimiento-asignaturas",
        "https://www.tec.ac.cr/formularios/solicitud-reconocimiento-asignaturas",
        "https://www.tec.ac.cr/formularios/solicitud-reconocimiento-asignaturas-tec",
        "https://www.tec.ac.cr/formularios/solicitud-reconocimiento-cursos-participacion-grupo-cultural-deportivo",
        "https://www.tec.ac.cr/formularios/solicitud-reconocimiento-asignaturas-maestria",
      ],
      namesLinks: [
        "Reconocimientos Automáticos",
        "Estudiantes de Universidades, Publicas, Privadas o Extrangeras",
        "Estudiantes de Colegios Científicos o  Colegios Universitarios",
        "Estudiantes del TEC, para reconocimientos Internos",
        "Estudiantes del TEC que forman parte de una agrupación Cultural o Deportiva",
        "Estudiantes de Programas de Maestría",
      ],
    },
    {
      title: "Paso 3",
      subtitle: "Descripción",
      data: [
        `Cancelar el monto de las materias a equiparar, según la fecha establecida en el Calendario Institucional y Académico.  El monto es fijado por el Depto de Financiero Contable.

      Los reconocimientos automaticos que forman parte del convenio de equiparación CONARE no tienen costo.`,
      ],
      links: ["https://www.tec.ac.cr/calendario-institucional"],
      namesLinks: ["Calendario Institucional y Académico"],
    },
    {
      title: "Paso 4",
      subtitle: "Descripción",
      data: [
        "En el caso de estudiantes del TEC que solicitan reconocer cursos aprobados en el TEC, el trámite no tendrá costo.",
      ],
      links: [],
      namesLinks: [],
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
          <Item
            subtitle={section.subtitle}
            text={section.data}
            links={section.links}
            namesLinks={section.namesLinks}
          />
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
  button: {
    paddingVertical: 10,
  },
});
