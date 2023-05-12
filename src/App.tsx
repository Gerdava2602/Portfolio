import { useEffect, useState } from "react";
import "./App.css";
import imgURL from "./assets/image.jpg";

function App() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    slide === document.querySelectorAll(".slide").length && setSlide(0);
  }, [slide]);

  return (
    <>
    <header style={{background: 'transparent'}}></header>
      <div className="slideshow">
        <div className="slide" style={{ marginLeft: `${-slide * 100}%` }}>
          <div className="content">
            <h1>
              I'm Germán Vargas
              <div className="roller">
                <span id="rolltext">
                  FullStack developer
                  <br />
                  Software Engineer
                  <br />
                  Data Scientist
                  <br />
                  Tech Passionate
                  <br />
                </span>
                <br />
              </div>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
          <div className="image">
            <img src={imgURL} alt="Imagen" />
          </div>
        </div>
        <div className="slide second">
          <h1 style={{ display: "flex" }}>
            I'm Germán Vargas
            <div className="roller">
              <span id="rolltext">
                Software Engineer
                <br />
                Dedicated
                <br />
                Curious
                <br />
                Creative
                <br />
              </span>
              <br />
            </div>
          </h1>
        </div>
        <div className="slide third">Hi</div>
        <div className="slide Forth">Hi</div>
        <button className="trans" onClick={() => setSlide(slide + 1)}>
          Trans
        </button>
      </div>
    </>
  );
}

export default App;
