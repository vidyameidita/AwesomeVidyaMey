import * as React from 'react';
import {View, Text, ImageBackground, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from 'react-native-paper';
import styles from './styles';


export default function App() {
const [data, setData] = useState([]);

useEffect(()=> {
  fetch('https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json')
  .then((response)=> response.json)
  .then((hasil)=> setData(hasil))
  .catch(error=> {console.log;})

}, []);

const listHomestay = ({item}) => {
  return (
    <Card style={styles.cardUtama}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{item.nama}</Text>
      </View>
      <View style={styles.containerImage}>
        <ImageBackground style={styles.image}
        source={{uri:item.fotoUr1}}>
          <Text style={styles.price}>Rp. {item.harga} Rb</Text>
        </ImageBackground>
      </View>
    </Card>
  )
}

return (
  <View style={{flex:1, padding:24}}>
    <FlatList
    data={data}
    keyExtractor={item=>item.id}
    renderItem={listHomestay}/>
  </View>
);
}
