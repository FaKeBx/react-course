import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

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
