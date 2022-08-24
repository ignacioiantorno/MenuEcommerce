import React from "react";
import "./styles.css";

import { styles } from "./styles";

// INTERPOLAR VARIABLES DE JS
// JSS

// COMPONENTS
import NavBar from "./components/NavBar";

const name = "Eder";
const city = "Ushuaia";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1 style={styles.heading}>Aprendiendo JSX</h1>
        <p>Hola!, mi nombre es: {name}</p>
        <p className="paragraph">Soy de la ciudad de {city.toUpperCase()}</p>
        <p style={{ color: "blue", fontSize: 28, border: "1px solid black" }}>
          {5 + 9}
        </p>
        <p style={styles.tres}>Tres a Uno</p>
      </div>
    );
  }
}

export default App;
