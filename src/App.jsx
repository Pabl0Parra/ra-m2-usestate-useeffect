import { useState, useEffect } from "react";
import { Circle, Triangle, Square } from "./components/atoms/index";
import {
  InputColorGroup,
  InputNumberGroup,
} from "./components/molecules/index";

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
        <InputNumberGroup
          htmlFor="triangle-size"
          title="Triangle size:"
          id="triangle-size"
          value={sizeTriangle}
          onChange={(e) => setSizeTriangle(e.target.value)}
        />
        <br />
        <InputColorGroup
          htmlFor="triangle-color"
          title="Triangle color:"
          id="triangle-color"
          color={colorTriangle}
          onChange={(e) => setColorTriangle(e.target.value)}
        />
        <br />
        <Triangle size={sizeTriangle} color={colorTriangle} />
      </div>
      <br />
      <br />
      <div className="circle">
        <InputNumberGroup
          htmlFor="circle-size"
          title="Circle size:"
          id="circle-size"
          value={sizeCircle}
          onChange={(e) => setSizeCircle(e.target.value)}
        />
        <br />
        <InputColorGroup
          htmlFor="circle-color"
          title="Circle color:"
          id="circle-color"
          color={colorCircle}
          onChange={(e) => setColorCircle(e.target.value)}
        />
        <br />
        <Circle size={sizeCircle} color={colorCircle} />
      </div>
      <br />
      <br />
      <div className="square">
        <InputNumberGroup
          htmlFor="square-size"
          title="Square size:"
          id="square-size"
          value={sizeSquare}
          onChange={(e) => setSizeSquare(e.target.value)}
        />
        <br />
        <InputColorGroup
          htmlFor="square-color"
          title="Square color:"
          id="square-color"
          color={colorSquare}
          onChange={(e) => setColorSquare(e.target.value)}
        />
        <br />
        <Square size={sizeSquare} color={colorSquare} />
      </div>
    </div>
  );
}

export default App;
