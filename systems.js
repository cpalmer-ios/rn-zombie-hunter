import { Dimensions } from "react-native";
import { Box, Player } from "./renderers";
import Matter from "matter-js";

let boxIds = 0;

const distance = ([x1, y1], [x2, y2]) =>
	Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));


const Physics = (state, { touches, time }) => {

	let engine = state["physics"].engine;

	Matter.Engine.update(engine, time.delta);

	return state;
};


const spriteSheet = (state) => {
	setTimeout(function () {
	  state.player.source = require("./assets/sprites/player/Idle-1.png")
		setTimeout(function () {
		state.player.source = require("./assets/sprites/player/Idle-2.png")
		  setTimeout(function () {
		  state.player.source = require("./assets/sprites/player/Idle-3.png")
			setTimeout(function () {
			state.player.source = require("./assets/sprites/player/Idle-4.png")
			  setTimeout(function () {
			  state.player.source = require("./assets/sprites/player/Idle-5.png")
				setTimeout(function () {	
				state.player.source = require("./assets/sprites/player/Idle-6.png")
				setTimeout(function () {	
				  state.player.source = require("./assets/sprites/player/Idle-7.png")
				  setTimeout(function () {	
					state.player.source = require("./assets/sprites/player/Idle-8.png")
					}, 2000)
				  }, 2000)
				}, 2000)
			  }, 2000)
			}, 2000)
		  }, 2000)
		}, 2000)
	}, 2000)
  }

const CreateBox = (state, { touches, screen }) => {
	let world = state["physics"].world;
	let boxSize = Math.trunc(Math.max(screen.width, screen.height) * 0.075);
	let img = "";

	touches.filter(t => t.type === "press").forEach(t => {
		let body = Matter.Bodies.rectangle(
			t.event.pageX,
			t.event.pageY,
			boxSize,
			boxSize,
			{ frictionAir: 0.021 }
		);
		Matter.World.add(world, [body]);

		state[++boxIds] = {
			body: body,
			size: [boxSize, boxSize],
			color: boxIds % 2 == 0 ? "blue" : "#B8E986",
			renderer: Player
		};
	});

	return state;
};



// const MoveBox = (state, { touches, screen }) => {
// 	let constraint = state["physics"].constraint;

// 	//-- Handle start touch
// 	let start = touches.find(x => x.type === "start");

// 	if (start) {
// 		let startPos = [start.event.pageX, start.event.pageY];

// 		let boxId = Object.keys(state).find(key => {
// 			let body = state[key].body;

// 			return (
// 				body &&
// 				distance([body.position.x, body.position.y], startPos) < 25
// 			);
// 		});

// 		if (boxId) {
// 			constraint.pointA = { x: startPos[0], y: startPos[1] };
// 			constraint.bodyB = state[boxId].body;
// 			constraint.pointB = { x: 0, y: 0 };
//             constraint.angleB = state[boxId].body.angle;
//             state[boxId].color = "red";
// 		}
// 	}

// 	//-- Handle move touch
// 	let move = touches.find(x => x.type === "move");

// 	if (move) {
// 		constraint.pointA = { x: move.event.pageX, y: move.event.pageY };
// 	}

// 	//-- Handle end touch
// 	let end = touches.find(x => x.type === "end");

// 	if (end) {
// 		constraint.pointA = null;
// 		constraint.bodyB = null;
// 		constraint.pointB = null;
// 	}

// 	return state;
// };

const { width, height } = Dimensions.get("window");

const MovePlayer = (state, { touches }) => {

	let i = 0;

	// alert(touches);
	let trees = state.trees.body;

	//-- Handle start touch
	let start = touches.find(x => x.type === "start"); 

	if (start && start.event.pageX > width / 4 * 3.75) {
		

		let boxId = Object.keys(state).find(key => {
			let body = state[key].body;

			return (
                body 
				// distance([body.position.x, body.position.y], startPos) < 25
			);
			
	
		});

		if (boxId) {
			// constraint.pointA = { x: startPos[0], y: startPos[1] };
			// constraint.bodyB = state[boxId].body;
			// constraint.pointB = { x: 0, y: 0 };
			// constraint.angleB = state[boxId].body.angle;

			setTimeout(function () {
				state[boxId].source = require("./assets/sprites/player/attacks/Attack2-1.png"),
				// state[boxId].body.position.x = state[boxId].body.position.x + 1,
				trees.position.x = trees.position.x - 5
				setTimeout(function () {
					state[boxId].source = require("./assets/sprites/player/attacks/Attack2-2.png"),
					// state[boxId].body.position.x = state[boxId].body.position.x + 1,
					trees.position.x = trees.position.x - 5
					setTimeout(function () {
						state[boxId].source = require("./assets/sprites/player/attacks/Attack2-3.png"),
						// state[boxId].body.position.x = state[boxId].body.position.x + 1,
						trees.position.x = trees.position.x - 5
						setTimeout(function () {
							state[boxId].source = require("./assets/sprites/player/attacks/Attack2-4.png"),
							// state[boxId].body.position.x = state[boxId].body.position.x + 1,
							trees.position.x = trees.position.x - 5
							setTimeout(function () {
								state[boxId].source = require("./assets/sprites/player/attacks/Attack2-5.png"),
								// state[boxId].body.position.x = state[boxId].body.position.x + 1,
								trees.position.x = trees.position.x - 5
								setTimeout(function () {	
									state[boxId].source = require("./assets/sprites/player/Idle-1.png"),
									// state[boxId].body.position.x = state[boxId].body.position.x + 1,
									trees.position.x = trees.position.x - 5
									state[boxId].scaleX = +1
								}, 20);
							}, 20); 
						}, 20); 
					}, 20);  
				}, 20);  
			}, 20);  
            // console.debug(state);
		}
	}

	else if (start && start.event.pageX < width / 4 * 3.75) {

				

		let boxId = Object.keys(state).find(key => {
			let body = state[key].body;

			return (
                body 
				// distance([body.position.x, body.position.y], startPos) < 25
			);
		});

		if (boxId) {
			// constraint.pointA = { x: startPos[0], y: startPos[1] };
			// constraint.bodyB = state[boxId].body;
			// constraint.pointB = { x: 0, y: 0 };
			// constraint.angleB = state[boxId].body.angle;


			setTimeout(function () {
				state[boxId].source = require("./assets/sprites/player/attacks/Attack2-1.png"),
				// state[boxId].body.position.x = state[boxId].body.position.x - 1;
				trees.position.x = trees.position.x + 5
				setTimeout(function () {
					state[boxId].source = require("./assets/sprites/player/attacks/Attack2-2.png"),
					// state[boxId].body.position.x = state[boxId].body.position.x - 1;
					trees.position.x = trees.position.x + 5
					setTimeout(function () {
						state[boxId].source = require("./assets/sprites/player/attacks/Attack2-3.png"),
						// state[boxId].body.position.x = state[boxId].body.position.x - 1;
						trees.position.x = trees.position.x + 5
						setTimeout(function () {
							state[boxId].source = require("./assets/sprites/player/attacks/Attack2-4.png"),
							// state[boxId].body.position.x = state[boxId].body.position.x - 1;
							trees.position.x = trees.position.x + 5
							setTimeout(function () {
								state[boxId].source = require("./assets/sprites/player/attacks/Attack2-5.png"),
								// state[boxId].body.position.x = state[boxId].body.position.x - 1;
								trees.position.x = trees.position.x + 5
								setTimeout(function () {	
									state[boxId].source = require("./assets/sprites/player/Idle-1.png"),
									// state[boxId].body.position.x = state[boxId].body.position.x - 1;
									trees.position.x = trees.position.x + 5
									state[boxId].scaleX = -1
								}, 20);
							}, 20); 
						}, 20); 
					}, 20);  
				}, 20);  
			}, 20);  
            
		}

	} 
	
	// //-- Handle move touch
	// let move = touches.find(x => x.type === "move");

	// if (move) {
	// 	constraint.pointA = { x: move.event.pageX, y: move.event.pageY };
	// }

	//-- Handle end touch
	let end = touches.find(x => x.type === "end");

	if (end) {

        let boxId = Object.keys(state).find(key => {
			let body = state[key].body;

			
			return (
				body
                // &&
				// distance([body.position.x, body.position.y], startPos) < 25
			);
		});
		// constraint.pointA = null;
		// constraint.bodyB = null;
		// constraint.pointB = null;
		state.player.source = require("./assets/sprites/player/Idle-1.png");
	}

	return state;
};

export { Physics, CreateBox, MovePlayer, spriteSheet};