import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* 
JAVASCRIPT PELADO O VANILLA
let elemento = document.createElement("p");
elemento.innerHTML = "Soy Juan de Cordoba";
let contenedor = document.getElementById("root");
contenedor.appendChild(elemento); 

let elemento = <p>Hola, soy Juan desde JSX</p>;
let container = document.getElementById("root");
ReactDOM.render(elemento, container);

//let jsx = React.createElement("h1", {}, "Hola soy Juan desde Create Element");

let nombre = "Juan Ignacio";
let apellido = " Carabante";
let edad = 24;
let calculo = () => {
  return 5 + 5 + edad;
};
let jsxMultiple = (
  <div>
    <h1>
      Soy una variable con muchos elementos soy el {nombre + apellido} y tengo{" "}
      {calculo(20)}
    </h1>
    <h3>JSX te amo</h3>
    <p>Esto es lo mas glorioso del mundo</p>
  </div>
);
let container = document.getElementById("root");
ReactDOM.render(jsxMultiple, container);*/
