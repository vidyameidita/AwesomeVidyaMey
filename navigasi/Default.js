import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Default = ({navigation}) => {
    return (
        <View>
            <Text>DefaultScreen</Text>
            <Button title ='Back to About'
            onPress={( )=>navigation.navigate('About')}/>
        </View>
    );
};

export default Default;