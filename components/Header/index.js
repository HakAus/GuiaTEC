import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/home.png')} />
        <Text style={styles.title}><Image style={styles.hat} source={require('../../assets/hat.png')} /> GuiaTEC</Text>
        <Image style={styles.menu} source={require('../../assets/menu2.png')} />
    </View>
  );
};

export default Header;