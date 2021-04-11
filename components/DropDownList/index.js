import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style";

const DropDownList = () => {
  const dropDownOptions = [
    {
      label: "Becas",
      value: "becas",
      icon: () => <Icon name="arrow-right-circle" size={18} color="#dc4649" />,
      untouchable: false,
      disabled: false,
    },
    {
      label: "Inclusión",
      value: "inclu",
      icon: () => <Icon name="arrow-right-circle" size={18} color="#dc4649" />,
      untouchable: false,
      disabled: false,
    },
    {
      label: "Reconocimiento de materias",
      value: "recon",
      icon: () => <Icon name="arrow-right-circle" size={18} color="#dc4649" />,
      untouchable: false,
      disabled: false,
    },
  ];

  const controller = useRef(null);
  const [value, setValue] = useState("");
  const [items, setItems] = useState(dropDownOptions);

  return (
    <DropDownPicker
      items={items}
      controller={(instance) => (controller.current = instance)}
      onChangeItem={(item) => {
        setValue(item.value);
        console.log(value);
      }}
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
      activeItemStyle={styles.activeItem}
    />
  );
};

export default DropDownList;
