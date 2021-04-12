import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const Precio = {
  HeadTable1: ['Precio'],
  HeadTable: ['₡150']
}

const Lugar = {
  HeadTable1: ['Lugar de salida'],
  HeadTable: ['Costado Sur de las Ruinas frente a la Plaza Domo Central']
}
//,  Sábados 07:40 am, 08:00 am, 11:45 am

const EntreSemana = {
  HeadTable1: ['Lunes a viernes'],
  HeadTable: ['Mañana', 'Tarde', 'Noche'],
  DataTable: [
    ['07:00 am', '12:50 pm', '06:00 pm'],
    ['07:10 am', '01:00 pm', '06:15 pm'],
    ['07:15 am', '01:50 pm', '06:30 pm'],
    ['07:20 am', '02:30 pm', '06:45 pm'],
    ['11:30 am', '03:25 pm', '07:15 pm'],
    ['12:00 md', '04:10 pm', '07:45 pm'],
    ['07:40 am', '04:45 pm', '        '],
    ['07:50 am', '05:00 pm', '        '],
    ['08:00 am', '05:15 pm', '        '],
    ['09:00 am', '05:30 pm', '        '],
    ['09:15 am', '05:45 pm', '        '],
    ['10:00 am', '        ', '        '],
    ['11:00 am', '        ', '        '],
    ['11:30 am', '        ', '        '],
    ['11:40 am', '        ', '        ']
  ]
}

const FinesSemana = {
  HeadTable1: ['Sabado'],
  HeadTable: ['Mañana', 'Tarde'],
  DataTable: [
    ['07:40 am', '        '],
    ['08:00 am', ' No hay '],
    ['11:45 am', '        ']
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
              <Text style={styles.text} > Cartago - TEC </Text>
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