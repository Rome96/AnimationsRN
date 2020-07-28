import React, {useState, useEffect} from 'react';
import {Text, Animated, StyleSheet} from 'react-native';

const AnimationsTiming = () => {
  const [animationView] = useState(new Animated.Value(0));
  const [animationText] = useState(new Animated.Value(14));
  const [animationCircle] = useState(new Animated.Value(0))
  const [animationSquare] = useState(new Animated.Value(0))
  const [animationSquareRotate] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationView, {
      toValue: 1, // valor al que llega
      duration: 300, // cantidad de tiempo en llegar
      useNativeDriver: true,
    }).start(); // iniciar la animacion

    Animated.timing(animationText, {
      toValue: 30,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    Animated.timing(animationCircle, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: true
    }).start()

    Animated.timing(animationSquare, {
      toValue: 250,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    Animated.timing(animationSquareRotate, {
      toValue: 360,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const interpolate = animationSquareRotate.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  })

  return (
    <Animated.View style={[styles.container, {opacity: animationView}]}>
      <Text style={{color: '#eee', fontSize: 16}}>Animations</Text>
      <Animated.Text
        style={[
          styles.text,
          {
            fontSize: 20,
            color: '#eee',
            fontSize: animationText,
          },
        ]}>
        Turiano romero
      </Animated.Text>
      <Animated.View style={[styles.circle, {opacity: animationCircle}]} />

      <Animated.View
        style={[
          styles.square,
          {
            height: animationSquare,
            width: animationSquare,
          },
        ]}>
        <Animated.Text
          style={[
            styles.text,
            {
              fontSize: animationText,
              color: '#000',
            },
          ]}>
          Rome
        </Animated.Text>
      </Animated.View>
      <Animated.View style={[
        styles.squareRotate,
        {transform: [{rotate: interpolate}]}
      ]}/>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
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
    marginVertical: 30,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99d8d0',
  },
  squareRotate: {
    width: 100,
    height: 100,
    marginVertical: 30,
    backgroundColor: 'green',
  },
});

export default AnimationsTiming;
