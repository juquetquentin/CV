import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Hello</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
