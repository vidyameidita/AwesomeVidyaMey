import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Profile = ({navigation}) => {
    return (
        <View>
            <Text>ProfileScreen</Text>
            <Button title ='Back to About'
            onPress={( )=>navigation.navigate('About')}/>
        </View>
    );
};

export default Profile;