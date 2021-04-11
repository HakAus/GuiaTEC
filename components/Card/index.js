import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Card({ children, pressHandler, style }) {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={{ ...styles.card, ...style }}>
        <View style={styles.cardContent}>{children}</View>
      </View>
    </TouchableOpacity>
  );
}
