import React from 'react'
import { View, TextInput } from 'react-native'
import styles from '../styles'
import PropTypes from 'prop-types';

export default function ListFilter({onFilter}) {
  return (
    <View>
        <TextInput 
            autoFocus
            placeholder='Search'
            style={styles.filter}
            onChangeText={onFilter}
        />
    </View>
  )
}

ListFilter.propTypes = {
    onFilter: PropTypes.func.isRequired,
}
