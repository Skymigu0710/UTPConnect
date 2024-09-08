import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import gato from "./images/th.jpeg";
import Menu from "./menu.js"
import Grupos from "./grupos.js"

function App() {
  return (
    <div className="container">
      <div className="section static">
        <Menu />
      </div>
      <div className="section scrollable">   

      </div>
      <div className="section static">
        <Grupos />
      </div>
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


