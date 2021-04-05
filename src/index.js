import React from "react";
import ReactDOM from "react-dom";
const customstyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid blue"
};

customstyle.color = "gold";
ReactDOM.render(
  <h1 style={customstyle}>Hello World!</h1>,
  document.getElementById("root")
);
