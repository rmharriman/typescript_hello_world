export class HelloWorldInTypescript {
    static HelloWorld() {
      
      // Interface example for an object
      interface LabeledValue {
        label: string
      }
  
      function printLabel(labeledObj: LabeledValue) {
        console.log(labeledObj.label);
      }

      let myObj = {size: 10, label: "Size 10 object"};
      printLabel(myObj)

      // Functions can have interfaces too
      // Like a function declaration, but only parameter list and return type
      interface SearchFunc {
        (source: string, subString: string): boolean;
      }
      
      // Create variable as function type (from interface)
      let mySearch: SearchFunc;
      // Assign new variable a function that respects contract
      mySearch = function(source: string, subString: string) {
        let result = source.search(subString);
        return result > -1;
      }
    
      // Can also use interfaces to describe types that can "index into"
      // Add an index signature that describes the types to use to index (can index with number or string)
      // Translation: When a StringArray is indexed with a number, it will return a string
      interface StringArray {
        [index: number]: string;
      }

      // Interfaces are commonly used to enforce that a class meets a particular contract
      interface ClockInterface {
        currentTime: Date;
        setTime(d: Date): void;
      }
    
      class Clock implements ClockInterface {
        currentTime: Date = new Date();
        setTime(d: Date) {
          this.currentTime = d;
        }
        constructor(h: number, m: number) { }
      }
      
      


      //////////////////////////////////
      interface SquareConfig {
        color?: string;
        width?: number;
      }

      function createSquare(config: SquareConfig): {color: string; area: number} {

        let newSquare = {color: "white", area: 1000}
        if (config.color) {
          newSquare.color = config.color;
        }

        if (config.width) {
          newSquare.area = config.width * config.width;
        }
        return newSquare
      }

      let mySquare = createSquare({color: "black"});
  
      console.log(mySquare)

      let h1 = document.createElement("h1");
      h1.innerText = "Hello, World in Typescript!!";
      document.body.appendChild(h1);




    }
  }