import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Vidya = ({navigation}) => {
    return (
        <View>
            <Text>VidyaScreen</Text>
            <Button title ='Back to About'
            onPress={( )=>navigation.navigate('About')}/>
        </View>
    );
};

export default Vidya;