import * as React from "react";
import Arrow from "./Arrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ICarouselProps {
  data: {
    image: string;
    title: string;
    description: string;
    source?: string;
  }[];
  color?: string;
}

const Carousel: React.FunctionComponent<ICarouselProps> = ({ data, color }) => {
  const [slide, setSlide] = React.useState(0);

  return (
    <div className="carousel">
      {data.map((item, idx) => (
        <div
          className="image"
          style={{ marginLeft: idx == 0 ? `${-slide * 100}%` : "" }}
        >
          <img src={item.image} alt={item.title} />
          <h2>
            {item.title}{" "}
            {item.source && (
              <a href={item.source} target="_blank">
                <FontAwesomeIcon
                  className="source beat"
                  color={color ? color : "white"}
                  icon={faGithub}
                />
              </a>
            )}
          </h2>
          <p>{item.description}</p>
        </div>
      ))}
      <Arrow
        maxSlide={data.length}
        right
        setSlide={setSlide}
        slide={slide}
        color={color}
      />
      <Arrow
        maxSlide={data.length}
        right={false}
        setSlide={setSlide}
        slide={slide}
        color={color}
      />
    </div>
  );
};

export default Carousel;
