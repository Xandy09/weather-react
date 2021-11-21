import "./App.css";
import "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="forecast" id="forecast"></div>
      <div>
        <footer>
          <a href="https://github.com/Xandy09/weather-app">Open Source Code</a>{" "}
          by Xandy Lundberg
        </footer>
      </div>
    </div>
  );
}
