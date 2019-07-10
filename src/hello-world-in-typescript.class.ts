export class HelloWorldInTypescript {
    static HelloWorld() {
      
      interface LabeledValue {
        label: string
      }
  
      function printLabel(labeledObj: LabeledValue) {
        console.log(labeledObj.label);
      }

      let myObj = {size: 10, label: "Size 10 object"};
      printLabel(myObj)


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