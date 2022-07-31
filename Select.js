import React from 'react';
import { View, Button, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Loading from './Loading';
import ListContainer from './List/ListContainer';


const Select = Loading(({navigation}) => {


    return (
        <View style={styles.container}>
            
        <ListContainer/>
          
        </View>
    );
})

export default Select;