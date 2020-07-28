import React, {useState, useEffect} from 'react';
import {Text, Animated, StyleSheet} from 'react-native';

const AnimationsTiming = () => {
  const [animationView] = useState(new Animated.Value(0));
  const [animationText] = useState(new Animated.Value(0));
  const [animationCircle] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationView, {
      toValue: 1, // valor al que llega
      duration: 2000, // cantidad de tiempo en llegar
      useNativeDriver: true,
    }).start(); // iniciar la animacion

    Animated.timing(animationText, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();

    Animated.timing(animationCircle, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: true
    }).start()
  }, []);

  return (
    <Animated.View style={[styles.container, {opacity: animationView}]}>
      <Text style={styles.text}>Animations Timing </Text>
      <Animated.Text style={[
        styles.text,
        {opacity: animationText, fontSize: 20, color: '#eee'},
      ]}>
        Turiano romero
      </Animated.Text>
      <Animated.View style={[styles.circle, {opacity: animationCircle}]}/>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#383e56',
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
  circle: {
    width: 100,
    height: 100,
    marginTop: 30,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});

export default AnimationsTiming;
