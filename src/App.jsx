import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./Components/ColorfulMessage";
import { ColorfulHeader } from "./Components/ColorfulMessage";

const App = () => {
  console.log("start");
  const [num, setNum] = useState(0);
  const [showFace, setShowFace] = useState(true);

  const onClickButton = () => {
    return setNum(num + 1);
  };

  const showFaceButton = () => {
    return setShowFace(!showFace);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num % 3 === 0 && num > 0) {
      showFace || setShowFace(true);
    } else {
      showFace && setShowFace(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <ColorfulHeader color="green" message="Hello" />
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I am Good!</ColorfulMessage>
      <button onClick={onClickButton}>Button</button>
      <br />
      <button onClick={showFaceButton}>on/off</button>
      <p>{num}</p>
      {showFace && <p>🤤</p>}
    </>
  );
};

export default App;
