
// Do not need to use curly braces if a default export is provided
// import { HelloWorldInTypescript } from  "./hello-world-in-typescript.class";
import HelloWorld from  "./hello-world-in-typescript.class";

import { Grid } from './class-practice.class';

const style = require("./main.css");

HelloWorld.HelloWorld();

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));