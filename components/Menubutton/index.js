import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles'

const Menubutton = (props) => {

  const {description} = props.option;
    return (
        <Pressable style={styles.menuContainer} onPress={()=> console.warn("kek")}>
                <Text style={styles.description}>{description} </Text>
                
                
        </Pressable>
);
};

export default Menubutton;