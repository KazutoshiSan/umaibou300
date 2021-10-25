import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;

  console.log(props);
  const contentStyle = {
    color: color,
    fontSize: "20px"
  };
  return <p style={contentStyle}>{children}</p>;
};

//これは自作
export const ColorfulHeader = (props) => {
  const { color, message } = props;
  const ChangeColor = {
    color: color,
    fontSize: "30px"
  };

  return <h1 style={ChangeColor}>{message}</h1>;
};
