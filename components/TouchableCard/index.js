import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function TouchableCard({ children, pressHandler, style }) {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={{ ...styles.touchableCard, ...style }}>
        <View style={styles.touchableCardContent}>{children}</View>
      </View>
    </TouchableOpacity>
  );
}
