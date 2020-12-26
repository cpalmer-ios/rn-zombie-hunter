import React from "react";
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

import Animated from "react-native-reanimated";

const Box = (props) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const angle = props.body.angle;

  return (
    <Animated.View
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: height,
        transform: [{ rotate: angle + "rad" }],
        backgroundColor: props.color || "blue",
      }}
    />
  );
};

const Player = (props) => {
    const width = props.size[0];
    const height = props.size[1];
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;
    const angle = props.body.angle;
    const sprite = props.source;
  
    return (
      <Animated.Image
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          transform: [{ rotate: angle + "rad" }],
          backgroundColor: props.color || "transparent",
        }}
        source={sprite}
      />
    );
  };

export { Box, Player };