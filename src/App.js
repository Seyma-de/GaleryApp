import Images from "./Images";
import React, { useState } from "react";
import "./styles.css";
function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="App">
      <h1>My Favorite Cities</h1>
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="random"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
