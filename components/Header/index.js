import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../../assets/hat.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}> {title} </Text>
      </View>
    </View>
  );
}

// import React from "react";
// import { View, Image, Text } from "react-native";

// import styles from "./styles";

// const Header = () => {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.logo} source={require("../../assets/home.png")} />
//       <Text style={styles.title}>
//         <Image style={styles.hat} source={require("../../assets/hat.png")} />{" "}
//         GuiaTEC
//       </Text>
//       <Image style={styles.menu} source={require("../../assets/menu2.png")} />
//     </View>
//   );
// };

// export default Header;
