import React from 'react';
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import AnimationsTiming from './src/components/AnimationsTiming';
import AnimationSpring from './src/components/AnimationSpring';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        {/* <AnimationsTiming/> */}
        <AnimationSpring/>
      </SafeAreaView>
    </>
  );
};


export default App;
