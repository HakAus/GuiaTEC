import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles'

const ContactItem = (props) => {

  const {description, email, number} = props.contact;

    return (
        <View style={styles.contactContainer}>        
            <View style={styles.titles}>
                <Text style={styles.title}>{description}</Text>
                <Text style={styles.email}><Image style={styles.mail} source={require('../../assets/mail.png')}/>{email} </Text>
                <Text style={styles.number}><Image style={styles.phone} source={require('../../assets/phone.png')}/>{number} </Text>
            </View> 
        </View>
);
};

export default ContactItem;