import { useEffect, useState } from "react";
import profilePicture from "./assets/image.jpeg";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Arrow from "./components/Arrow";
import Footer from "./components/Footer";
import { fullStackProjects } from "./constants/projects";
import { colors } from "./constants/colors";
import SkillRow from "./components/SkillRow";
import "./App.scss";
import {
  backend,
  cloud,
  dataScience,
  databases,
  devops,
  frontend,
  languages,
  testing,
} from "./constants/skills";

function App() {
  const [slide, setSlide] = useState(0);
  const [color, setColor] = useState(colors[slide]);

  const mobile = window.innerWidth < 1200;

  useEffect(() => {
    slide === document.querySelectorAll(".slide").length && setSlide(0);
    setColor(colors[slide]);
  }, [slide]);

  const onLogo = () => {
    setSlide(0);
  };

  return (
    <>
      <Header color={color} onLogo={onLogo} />
      <div className="slideshow">
        <div className="slide" style={{ marginLeft: `${-slide * 100}%` }}>
          <div className="content">
            <h1>
              I am Germán Vargas
              <div className="roller">
                <span id="rolltext">
                  Software Engineer
                  <br />
                  FullStack developer
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
        <div className="slide show fullStack">
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
            data={fullStackProjects.map((project) => ({
              ...project,
              image: profilePicture,
            }))}
          />
        </div>
        <div className="slide show dataScience">
          <div className="info">
            <h1>Data science & Artificial Intelligence</h1>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quia, repellat, nisi repudiandae at quisquam ullam vero, incidunt
            </p>
          </div>
          <Carousel
            data={fullStackProjects.map((project) => ({
              ...project,
              image: profilePicture,
            }))}
            color={mobile ? colors[2] : color}
          />
        </div>
        <div className="slide skills">
          <div className="info">
            <h1>Skills</h1>
          </div>
          <div className="categories">
            <div className="column">
              <h2 className="category">Languages</h2>
              <SkillRow skills={languages} />
              <h2 className="category">Backend</h2>
              <SkillRow skills={backend} />
              <h2 className="category">Frontend</h2>
              <SkillRow skills={frontend} />
              <h2 className="category">Devops</h2>
              <SkillRow skills={devops} />
            </div>
            <div className="column">
              <h2 className="category">Databases</h2>
              <SkillRow skills={databases} />
              <h2 className="category">Testing</h2>
              <SkillRow skills={testing} />
              <h2 className="category">Data science</h2>
              <SkillRow skills={dataScience} />
              <h2 className="category">Cloud</h2>
              <SkillRow skills={cloud} />
            </div>
          </div>
        </div>
        <Arrow
          right
          slide={slide}
          setSlide={setSlide}
          maxSlide={4}
          color={color}
        />
        <Arrow
          right={false}
          slide={slide}
          setSlide={setSlide}
          maxSlide={4}
          color={color}
        />
        <Footer color={mobile ? "white" : color} />
      </div>
    </>
  );
}

export default App;
