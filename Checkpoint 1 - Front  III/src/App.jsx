import { useState } from "react";
import { Card } from "./Card";
import "./index.css";

function App() {
  const [colors, setColors] = useState([]);
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("");
  function newColor(event) {
    event.preventDefault()
    let color = {colorName: colorName, colorCode: colorCode    }
    setColors([...colors, color])
    setColorName("")
    setColorCode("")
}

  return (
    <div className="App">
      <h1>Set your color</h1>

      <form className="form" onSubmit={event => newColor(event)}>
        <div>
          <label htmlFor="name">Color Name</label>
          <input
            type="text"
            id="name"
            value={colorName}
            placeholder="Type your color's name here"
            onChange={(event) => setColorName(event.target.value)}
            required="required"
          />
        </div>
        <div>
          <label htmlFor="color">Color Hex</label>
          <input
            className="color-input"
            type="color"
            id="color"
            value={colorCode}
            onChange={(event) => setColorCode(event.target.value)}
            required="required"
          />

          <button type="submit">Add Color</button>
        </div>
      </form>

      <section>
        <h1>Fav Colors</h1>
        <div className="card-colors">
          {colors.map((color, index) => {
            return (
              <Card
                key={index}
                colorName={color.colorName}
                colorCode={color.colorCode}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
