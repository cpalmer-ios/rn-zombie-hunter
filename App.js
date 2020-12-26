import React from "react";
import { StatusBar, Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Physics, CreateBox, MoveBox, MovePlayer, CleanBoxes, CreateSprite } from "./systems";
import { Box, Player } from "./renderers";
import Matter from "matter-js";
// import SpriteSheet from 'rn-sprite-sheet';



Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement

const RigidBodies = (props) => {
  const { width, height } = Dimensions.get("window");
  const boxSize = Math.trunc(Math.max(width, height) * 0.2);
  const floorSize = Math.trunc(Math.max(width, height) * 0.1);
  const source = "https://opengameart.org/sites/default/files/Pirate%201%20(Idle)%20PREVIEW.png";

  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;
  const body = Matter.Bodies.rectangle(width / 4, -1000, boxSize, boxSize, { frictionAir: 0.021 });
  const floor = Matter.Bodies.rectangle(width / 2, height - boxSize / 10, width, boxSize / 2, { isStatic: true });
  const constraint = Matter.Constraint.create({
    label: "Drag Constraint",
    pointA: { x: 0, y: 0 },
    pointB: { x: 0, y: 0 },
    length: 0.01,
    stiffness: 0.1,
    angularStiffness: 1,
  });

  Matter.World.add(world, [body, floor]);
  Matter.World.addConstraint(world, constraint);

  return (
    <GameEngine
      systems={[Physics, MovePlayer]}
      entities={{
        physics: { engine: engine, world: world, constraint: constraint },
        player: { body: body, size: [boxSize, boxSize], color: "transparent", source: source, renderer: Player },
        floor: { body: floor, size: [width, floorSize], color: "#86E9BE", renderer: Box },
      }}
    >
      <StatusBar hidden={true} />
    </GameEngine>
  );
};

export default RigidBodies;