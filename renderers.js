import React from "react";
import { ImageBackground, Image } from 'react-native';
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
    const y = props.body.position.y - height;
    const angle = props.body.angle;
    const sprite = props.source;
  
    return (
      <Animated.Image
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: 300,
          height: 300,
          transform: [{ rotate: angle + "rad" }],
          backgroundColor: props.color || "transparent",
          resizeMode: 'stretch',
        }}
        source={sprite}
      />
    );
  };

  const LevelBackground = (props) => {
    const source = props.source;
    return (
        <ImageBackground 
        source={source}
        style={{width: '100%', height: '100%', paddingBottom: 10,}} 
    />
    );
  };

  const Mountains = (props) => {
    const source = props.source;
    return (
        <Image
        source={source}
        style={{position: 'absolute', width: '100%', height: '100%'}} 
    />
    );
  };

  const Summit = (props) => {
    const source = props.source;
    return (
        <Image
        source={source}
        style={{position: 'absolute', width: '100%', height: '100%'}} 
    />
    );
  };

  const Trees = (props) => {
    const source = props.source;
    return (
        <Image
        source={source}
        style={{position: 'absolute', width: '100%', height: '100%'}} 
    />
    );
  };

export { Box, Player, LevelBackground, Mountains, Summit, Trees };