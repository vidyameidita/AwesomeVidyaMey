import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title ='Go to About'
            onPress={( )=>navigation.navigate('About')}/>
        </View>
    );
};

export default Home;