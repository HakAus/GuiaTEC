import React from 'react';
import {View, Text, FlatList, Dimensions, Image} from 'react-native';
import ContactItem from "../ContactItem";

import styles from './styles';
import contacts from './contacts';

const CarsList = (props) => {
    const {content, type} = props;
    return (
    

    <View style={styles.container}>
        <Text style={styles.title}>{content}</Text>

        <FlatList
        data={contacts.filter((item)=> item.type === type)}
        renderItem={({item}) => <ContactItem contact={item} />}
        />
    </View>
    );
};

export default CarsList;