import React from "react";
import { ImagePanorama, Viewer } from "panolens";
import { useNavigate } from 'react-router-dom';
function App() {
    const arr = [
    "./n3 (1).jpeg",
    "./n3 (2).jpeg",
    "./n3 (3).jpeg",
    "./n3 (4).jpeg",
    "./n3 (5).jpeg",
];
  React.useEffect(() => {
    const imgContainer = document.getElementsByClassName("Image-container");
    const img = new ImagePanorama(arr[0]);
    const viewer = new Viewer({
        container: imgContainer[0],
    });
    viewer.add(img);
});
const navigate = useNavigate();
  const clicked=(e)=>{
      e.preventDefault();
      const randomNumber= Math.floor(Math.random()*5)+1;
      navigate(`/${randomNumber}`)
  }

  return (
    <div className="container">
      <div className="custom-container">
        <h1>Random image?</h1>
        <button id="btn" onClick={clicked} >Change?</button>
      </div>
      <div className="Image-container"></div>
    </div>
  );
}

export default App;
