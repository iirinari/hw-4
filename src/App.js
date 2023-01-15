import React from "react";
import Header from "./Header";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="weather-forecast" id="forecast"></div>
        <footer>
          <div class="copyright">
            {/* © Create by_ */}
            <a
              href="https://github.com/iirinari/hw-4"
              title="GitHub"
              target="_blank" rel="noopener noreferrer"
            >
              GitHub
            </a>
            {/* _2022 */}
          </div>
        </footer>
      </div>
    </div>
  );
}
