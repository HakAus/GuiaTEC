import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SectionList,
  Button,
  Linking,
} from "react-native";
import Card from "../components/Card";

export default function AdminScholarship({ navigation, route }) {
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
      title: "Acerca de",
      subtitle: "Los tipos de beca",
      data: [
        `Una vez que se conozca el resultado del examen de admisión, y si tu condición es "Admitido(a)" se te enviará el procedimiento a seguir.
 
      Es importante aclararte que el TEC ofrece dos tipos de becas: socioeconómicas y estímulo. En el caso de las becas socioeconómicas podés participar realizando el procedimiento debido sin embargo se te asignará una de las becas que conforman este tipo según los resultados del estudio socioeconómico.
       
      Para optar por una beca estímulo, debes tener al menos un año como estudiante regular del TEC.
      
      Las Becas Socioeconómicas son asignadas a estudiantes que presentan condiciones socio económicas limitadas. 
        
      Para ello se requiere que el o la estudiante realice una solicitud de valoración ante la oficina de Becas del campus o centro académico correspondiente, según el cronograma de fechas estipulado para cada semestre.`,
      ],
      links: [],
      namesLinks: [],
    },
    {
      title: "Paso 1",
      subtitle: "Descripción",
      data: [
        `
        El interesado debe completar el formulario de solicitud de beca
        `,
      ],
      links: [
        "https://www.tec.ac.cr/sites/default/files/media/doc/formulario_de_solicitud_de_atencion_socio_economica_tec.pdf",
      ],
      namesLinks: ["Formulario de solicitud de beca"],
    },
    {
      title: "Paso 2",
      subtitle: "Descripción",
      data: [
        `
        Completar la encuesta socioeconómica digital
      `,
      ],
      links: [
        "http://aplics.tec.ac.cr/EncuestaSE/Autenticacion.aspx?ReturnUrl=/EncuestaSE/default.aspx",
      ],
      namesLinks: ["Encuesta socioeconómica digital"],
    },
    {
      title: "Paso 3",
      subtitle: "Descripción",
      data: [
        "Entregar el formulario y los documentos solicitados según el tipo de beca en las fechas establecidas.",
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
  link: {
    color: "blue",
  },
  button: {
    paddingVertical: 10,
  },
});
