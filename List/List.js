import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import Box from './juegos/Box';
import ListControls from './ListControls';

export default function List({Controls, data, onFilter}) {
  return (
      <FlatList 
        data={data}
        ListHeaderComponent={<Controls {...{onFilter}} />}
        renderItem={({item}) => 
            <Box 
                key={item.key}
                id = {item.value.id}  
                name={item.value.name}   
            />
        }
      />
  )
}

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
}

List.defaultProps = {
  Controls: ListControls
}
