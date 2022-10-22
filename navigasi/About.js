import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const About = ({navigation}) => {
    return (
        <View>
            <Text>AboutScreen</Text>
            <Button title= 'Go Back Home'
            onPress={()=>navigation.navigate('Home')}/>
            <Text>VidyaScreen</Text>
            <Button title= 'Go Vidya'
            onPress={()=>navigation.navigate('Vidya')}/>
            <Text>ProfileScreen</Text>
            <Button title= 'Go Profile'
            onPress={()=>navigation.navigate('Profile')}/>
            <Text>SettingScreen</Text>
            <Button title= 'Go Setting'
            onPress={()=>navigation.navigate('Setting')}/>
            <Text>DefaultScreen</Text>
            <Button title= 'Go Default'
            onPress={()=>navigation.navigate('Default')}/>


        </View>
    );
};

export default About;