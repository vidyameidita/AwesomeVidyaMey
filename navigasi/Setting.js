import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Setting = ({navigation}) => {
    return (
        <View>
            <Text>SettingScreen</Text>
            <Button title ='Back to About'
            onPress={( )=>navigation.navigate('About')}/>
        </View>
    );
};

export default Setting;