import React from 'react';
import {StyleSheet, View, Text, Button, Image, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles';

function Box({ id, name }) {
    const navigation = useNavigation();
    return(
        <View>
        <ImageBackground source={require('../../images/Pajaro.gif' )} style={styles.imageBack}>
            <Button
                title={name}
                onPress={() => navigation.navigate("Game", {id: id})}
                style = {styles.buttons}
            />
        </ImageBackground>
        </View>
    );
}

export default Box;