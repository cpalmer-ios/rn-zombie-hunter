import React from "react";
import Animated from "react-native-reanimated";

import hcbgImage from "./espen.png";

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
  
    return (
      <Animated.Image
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          transform: [{ rotate: angle + "rad" }],
          backgroundColor: props.color || "blue",
        //   backgroundImage: props.image || 'url('+hcbgImage+')',
        }}
        source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          }}
      />
    );
  };

export { Box, Player };