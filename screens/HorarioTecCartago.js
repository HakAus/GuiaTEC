import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const Precio = {
  HeadTable1: ['Precio'],
  HeadTable: ['₡150']
}

const Lugar = {
  HeadTable1: ['Lugar de salida'],
  HeadTable: ['Parada de buses del TEC']
}


const EntreSemana = {
  HeadTable1: ['Lunes a viernes'],
  HeadTable: ['Mañana', 'Tarde', 'Noche'],
  DataTable: [
    ['08:30 am', '12:10 pm', '06:00 pm'],
    ['09:30 am', '12:30 pm', '06:15 pm'],
    ['10:30 am', '01:10 pm', '06:30 pm'],
    ['11:15 am', '02:10 pm', '06:45 pm'],
    ['11:30 am', '03:10 pm', '07:00 pm'],
    ['12:00 md', '03:40 pm', '07:35 pm'],
    ['        ', '04:00 pm', '08:00 pm'],
    ['        ', '04:30 pm', '08:30 pm'],
    ['        ', '04:40 pm', '09:00 pm'],
    ['        ', '05:00 pm', '09:30 pm'],
    ['        ', '05:15 pm', '        '],
    ['        ', '05:30 pm', '        ']
  ]
}

const FinesSemana = {
  HeadTable1: ['Sabado'],
  HeadTable: ['Mañana', 'Tarde'],
  DataTable: [
    ['12:00 md', '12:40 pm'],
    ['        ', '04:00 pm'],
    ['        ', '04:40 pm']
  ]
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}> 
          <View style={styles.container}>
              <Text style={styles.text} > TEC - Cartago </Text>
          </View>

          <View style={styles.containerTable}>
            <Table borderStyle={styles.TableBorder}>
              <Row data={Precio.HeadTable1} style={styles.HeadStyle} textStyle={styles.TableText}/>
              <Row data={Precio.HeadTable} textStyle={styles.TableText}/>
            </Table>
          </View>

          <View style={styles.containerTable}>
            <Table borderStyle={styles.TableBorder}>
              <Row data={Lugar.HeadTable1} style={styles.HeadStyle} textStyle={styles.TableText}/>
              <Row data={Lugar.HeadTable} textStyle={styles.TableText}/>
            </Table>
          </View>

          <View style={styles.containerTable}>
          <Table borderStyle={styles.TableBorder}>
              <Row data={EntreSemana.HeadTable1} style={styles.HeadStyle} textStyle={styles.TableText}/>
              <Row data={EntreSemana.HeadTable} textStyle={styles.TableText}/>
              <Rows data={EntreSemana.DataTable} textStyle={styles.TableText}/>
            </Table>
          </View>

          <View style={styles.containerTable}>
            <Table borderStyle={styles.TableBorder}>
              <Row data={FinesSemana.HeadTable1} style={styles.HeadStyle} textStyle={styles.TableText}/>
              <Row data={FinesSemana.HeadTable} textStyle={styles.TableText}/>
              <Rows data={FinesSemana.DataTable} textStyle={styles.TableText}/>
            </Table>
          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 30,
    paddingTop: 50,
    alignContent: "center",
    backgroundColor: '#ffffff'
  },
  containerTable: { 
    flex: 5,
    padding: 15,
    paddingTop: 20,
    alignContent: "center",
    backgroundColor: '#ffffff',
  },
  containerPruebas: { 
    flex: 30,
    padding: 30,
    paddingTop: 50,
    alignContent: "center",
    backgroundColor: '#33BE52',
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    borderColor: "#E0E0E0",
    backgroundColor: '#E0E0E0'
  },
  TableText: { 
    alignContent: "center",
    textAlign: "center",
    margin: 10
  },
  TableBorder:{
    borderColor: "#ffffff",
    alignContent: "center",
    alignItems: "center"
  },
  square: {
    alignSelf: "center",
    backgroundColor: "#2645C3",
    borderRadius: 44,
    height: 150,
    shadowColor: "black",
    width: 150,

  },

  text:{
    fontSize: 30,
    alignContent: "center",
    textAlign: "center",
    alignItems: "center"
  },

});
