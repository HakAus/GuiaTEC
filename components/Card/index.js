import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Card({ children, pressHandler }) {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.card}>
        <View style={styles.cardContent}>{children}</View>
      </View>
    </TouchableOpacity>
  );
}
