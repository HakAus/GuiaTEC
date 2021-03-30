import React from 'react';
import {View, Text, FlatList, Dimensions, Image} from 'react-native';
import Menubutton from "../Menubutton";

import styles from './styles';
import options from './options';

const MenuList = (props) => {
    const {content} = props;
    return (
    

    <View style={styles.container}>
        <Text style={styles.title}>{content}</Text>
        <FlatList
        data={options}
        renderItem={({item}) => <Menubutton option={item} />}
        />
    </View>
    );
};

export default MenuList;