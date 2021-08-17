import React from "react";
import GridPhotoGallery from "./main.js";
const App = () => {
  const fooBar = React.useRef(null);
  return (
    <div ref={fooBar}>
      <GridPhotoGallery></GridPhotoGallery>
    </div>
  );
};
export default App;
