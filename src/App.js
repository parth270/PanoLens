import React from 'react';
import { ImagePanorama } from 'panolens';
function App() {

  const viewer = new ImagePanorama();
  React.useEffect(()=>{
    const imgContainer = document.getElementsByClassName("Image-container");
    console.log(imgContainer[0]);
  })
  return (
    <div className='container' >
      <div className="Image-container" >

      </div>
    </div>
  );
}

export default App;
