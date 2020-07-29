import React, {useState} from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'


const AnimationSpring = () => {

  const [animationBtn] = useState(new Animated.Value(1))

  const pressInBtn = () => {
    Animated.spring(animationBtn, {
      toValue: .5,
      useNativeDriver: false,
    }).start();
  };

  const pressOutBtn = () => {
    Animated.spring(animationBtn, {
      toValue: 1,
      friction: 3, // más bajo, mayor rebotes
      tension: 100,
      useNativeDriver: false
    }).start()
  };
  
	return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        // onPress={() => alert('hola')}
        onPressIn={() => pressInBtn()}
        onPressOut={() => pressOutBtn()
      }>
        <Animated.View style={[styles.btn, {transform: [{scale: animationBtn}]}]}>
          <Text style={styles.textBtn}> Press Me! </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  btn: {
    width: 200,
    height: 55,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4b5d67',
  },
  textBtn: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default AnimationSpring