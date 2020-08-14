import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen navigation</Text>
        <Button 
          title="Go to Home Screen"
          onPress={() => navigation.navigate("Details")} />
      </View>
    );
}

export default HomeScreen;