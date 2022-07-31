import React, { useMemo, useState } from 'react'
import List from './List';
import Juegos from './juegos/Juegos';

const mapItems = (items) => items.map((value, i) => ({ key: i.toString(), value }));

const array = new Array(100).fill(null).map((value, i) => `Items ${i}`);
function filterF(text){
    return Juegos
           .filter( (i) => text.length === 0 || i.name.includes(text))
};

const ListContainer = () => {
    const [filter, setFilter] = useState('')

    const data = useMemo(() => {
        return filterF(filter);
    }, [filter]);

  return (
    <>
      <List 
          data = {mapItems(data)}
          onFilter = {(text) => {
              setFilter(text);
          }}

          
          
      />
    </>
  )

}


export default ListContainer;
