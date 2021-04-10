import React from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style";

const DropDownList = () => {
  return (
    <DropDownPicker
      items={[
        {
          label: "Becas",
          value: "becas",
          icon: () => (
            <Icon name="arrow-right-circle" size={18} color="#dc4649" />
          ),
        },
        {
          label: "Inclusión",
          value: "inclu",
          icon: () => (
            <Icon name="arrow-right-circle" size={18} color="#dc4649" />
          ),
        },
        {
          label: "Reconocimiento de materias",
          value: "recon",
          icon: () => (
            <Icon name="arrow-right-circle" size={18} color="#dc4649" />
          ),
        },
      ]}
      // Styling
      containerStyle={styles.outerContainer}
      style={styles.innerContainer}
      itemStyle={styles.item}
      dropDownStyle={styles.dropDown}
      placeholderStyle={styles.placeholder}
      childrenContainerStyle={styles.childrenContainer}
      // Other settings
      dropDownMaxHeight={300}
      placeholder="Seleccione una categoría"
      arrowColor="#ffffff"
      onChangeItem={(item) =>
        this.setState({
          country: item.value,
        })
      }
    />
  );
};

export default DropDownList;
