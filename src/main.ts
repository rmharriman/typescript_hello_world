
// Do not need to use curly braces if a default export is provided
// import { HelloWorldInTypescript } from  "./hello-world-in-typescript.class";
import HelloWorld from  "./hello-world-in-typescript.class";

// Names do not match the exported property. 
// In this case the default exported Grid class is aliased with G
import G from './class-practice.class';

const style = require("./main.css");

new HelloWorld("Hello, World in Typescript!!");
new HelloWorld("Another instance of my class");

let grid1 = new G(1.0);  // 1x scale
let grid2 = new G(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));