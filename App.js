import React from 'react';
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import AnimationsTiming from './src/components/AnimationsTiming';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <AnimationsTiming/>
      </SafeAreaView>
    </>
  );
};


export default App;
