import { Text, View, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';


const Loading = (Wrapper) => {
  return function LoadingWrapper(props) {
    const[loading, setLoading] = useState(true);
    useEffect(() =>{
        setTimeout(() =>{
            setLoading(false);
        }, 1000)
    }, []) 
  
    if(loading){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
    else{

        return( <Wrapper {...props}/>)
    }
  }
}

export default Loading;