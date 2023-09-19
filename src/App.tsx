import { useEffect, useState } from "react";
import "./App.scss";
import profilePicture from "./assets/image.jpeg";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Arrow from "./components/Arrow";
import Footer from "./components/Footer";

function App() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    slide === document.querySelectorAll(".slide").length && setSlide(0);
  }, [slide]);

  return (
    <>
      <Header slide={slide} />
      <div className="slideshow">
        <div className="slide" style={{ marginLeft: `${-slide * 100}%` }}>
          <div className="content">
            <h1>
              I am Germán Vargas
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
            <div className="text">
              <p>
                I am a software engineer characterized by my insightful,
                passionate and resilient approach to problem solving. I love the
                world of technology, interested in multiple paths such as
                full-stack development, cloud services, software engineering and
                DevOps. Due to my experience, I have been part of the creation
                of several applications and have been involved in all the
                fundamental steps (Design, development, deployment, testing)
                which makes me an all-round developer who is happy to help in
                the process.
              </p>
            </div>
          </div>
          <div className="image">
            <img src={profilePicture} alt="Imagen" />
          </div>
        </div>
        <div className="slide show">
          <div className="info">
            <h1>Full Stack development</h1>
          </div>
          <div className="description">
            <p>
              I have worked as a full-stack dev in several companies. I have
              created products from scratch and have been involved in all the
              steps of the process.
            </p>
          </div>
          <Carousel
            data={[
              {
                image: profilePicture,
                title: "Full Stack development",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sequi doloribus dolores, quod quas cum corporis et, nulla ipsum aspernatur quidem, sed quibusdam. Nulla cumque eveniet aliquam mollitia libero deserunt!",
              },
              {
                image: profilePicture,
                title: "Front development",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sequi doloribus dolores, quod quas cum corporis et, nulla ipsum aspernatur quidem, sed quibusdam. Nulla cumque eveniet aliquam mollitia libero deserunt!",
              },
            ]}
          />
        </div>
        <div className="slide third">Hi</div>
        <div className="slide Forth">Hi</div>
        <Arrow right slide={slide} setSlide={setSlide} maxSlide={4} color />
        <Arrow
          right={false}
          slide={slide}
          setSlide={setSlide}
          maxSlide={4}
          color
        />
      </div>
      <Footer slide={slide} />
    </>
  );
}

export default App;
