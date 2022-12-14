import { useState, useEffect } from "react";

import InputSize from "./components/atoms/InputSize";
import InputColor from "./components/atoms/InputColor";
import Triangle from "./components/atoms/Triangle";
import Circle from "./components/atoms/Circle";
import Square from "./components/atoms/Square";
import Label from "./components/atoms/Label";

function App() {
  const [colorTriangle, setColorTriangle] = useState("#800000");
  const [colorCircle, setColorCircle] = useState("#4DD44D");
  const [colorSquare, setColorSquare] = useState("#564DD4");

  const [sizeTriangle, setSizeTriangle] = useState("");
  const [sizeCircle, setSizeCircle] = useState("");
  const [sizeSquare, setSizeSquare] = useState("10");

  useEffect(() => {
    setSizeTriangle("50");
    setSizeCircle("80");
    setSizeSquare("60");
  }, []);

  if (sizeTriangle === sizeCircle && sizeTriangle === sizeSquare) {
    alert(`The three figures have the same size`);
  }

  if (colorTriangle === colorCircle && colorTriangle === colorSquare) {
    alert(`The three figures have the same color`);
  }

  return (
    <div className="App">
      <h4>
        <strong>Exercise useState & useEffect.</strong>
      </h4>
      <div className="triangle">
        {/* Aquí estas agrupando Label + Input por cada forma */}
        {/* Label e Input siempre van juntos. A nivel de Atoms crear componentes InputNumberGroup y InputColorGroup que los agrupe */}
        <Label id="triangle-size" value="Triangle size:" />
        <InputSize
          id="triangle-size"
          size={sizeTriangle}
          onChange={(e) => setSizeTriangle(e.target.value)}
        />
        <br />
        <Label id="triangle-color" value="Triangle color:" />
        <InputColor
          id="triangle-color"
          color={colorTriangle}
          onChange={(e) => setColorTriangle(e.target.value)}
        />
        <Triangle size={sizeTriangle} color={colorTriangle} />
      </div>
      <br />
      <br />
      <div className="circle">
        <Label id="circle-size" value="Circle size:" />
        <InputSize
          id="circle-size"
          size={sizeCircle}
          onChange={(e) => setSizeCircle(e.target.value)}
        />
        <br />
        <Label id="circle-color" value="Circle color:" />
        <InputColor
          id="circle-color:"
          color={colorCircle}
          onChange={(e) => setColorCircle(e.target.value)}
        />
        <Circle size={sizeCircle} color={colorCircle} />
      </div>
      <br />
      <br />
      <div className="square">
        <Label id="square-size" value="Square size:" />
        <InputSize
          id="square-size"
          size={sizeSquare}
          onChange={(e) => setSizeSquare(e.target.value)}
        />
        <br />
        <Label id="square-color" value="Square color:" />
        <InputColor
          id="square-color"
          color={colorSquare}
          onChange={(e) => setColorSquare(e.target.value)}
        />
        <Square size={sizeSquare} color={colorSquare} />
      </div>
    </div>
  );
}

export default App;
