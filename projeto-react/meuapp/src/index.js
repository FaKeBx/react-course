import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./exe-props/Header";
import Home from "./exe-props/Home";
import Produtos from "./exe-props/Produtos";

const root = ReactDOM.createRoot(document.getElementById("root"));

const { pathname } = window.location;

let Component;
if (pathname === "/Produtos") {
  Component = Produtos;
} else {
  Component = Home;
}

root.render(
  <>
    <Header />
    <Component />
  </>
);
