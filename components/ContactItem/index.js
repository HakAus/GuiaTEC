import React from "react";
import { View, Text, Image, Linking, Button } from "react-native";
import styles from "./styles";

const ContactItem = (props) => {
  const { type, description, email, number } = props.contact;

  const call = () => Linking.openURL(`tel:${number}`);

  return (
    <View style={styles.contactContainer}>
      <View style={styles.titles}>
        <Text style={styles.department}>{type}</Text>
        <Text style={styles.title}>{description}</Text>
        <Text style={styles.email}>
          <Image
            style={styles.mail}
            source={require("../../assets/mail.png")}
          />
          {email}{" "}
        </Text>
        <Button title={`Llamar a ${number}`} onPress={call} />
        {/* <Text style={styles.number}>
          <Image
            style={styles.phone}
            source={require("../../assets/phone.png")}
          />
          {number}{" "}
        </Text> */}
      </View>
    </View>
  );
};

export default ContactItem;
