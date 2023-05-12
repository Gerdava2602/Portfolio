import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    slide === 4 && setSlide(0);
  }, [slide]);

  return (
    <div className="slideshow">
      <div className="slide" style={{marginLeft: `${-slide*100}%`}}>First</div>
      <div className="slide second">Hi</div>
      <div className="slide third">Hi</div>
      <div className="slide Forth">Hi</div>
      <button className="trans" onClick={() => setSlide(slide + 1)}>
        Trans
      </button>
    </div>
  );
}

export default App;
