import * as React from "react";

interface ICarouselProps {
  data: {
    image: string;
    title: string;
    description: string;
  }[];
}

const Carousel: React.FunctionComponent<ICarouselProps> = ({ data }) => {
  const [slide, setSlide] = React.useState(0);

  const onBack = () => {
    if (slide === 0) {
      setSlide(data.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const onNext = () => {
    if (slide === data.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  return (
    <div className="carousel">
      {data.map((item, idx) => (
        <div className="image" style={{ marginLeft: idx == 0 ? `${-slide * 100}%` : '' }}>
          <img src={item.image} alt="Imagen" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      <button className="back" onClick={onBack}>back</button>
      <button className="next" onClick={onNext}>Next</button>
    </div>
  );
};

export default Carousel;
