import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

interface IArrowProps {
  right: boolean;
  slide: number;
  setSlide: (slide: number) => void;
  maxSlide: number;
  color?: string;
}

const Arrow: React.FunctionComponent<IArrowProps> = ({
  right,
  slide,
  setSlide,
  maxSlide,
  color,
}) => {
  const onClick = () => {
    if (right) {
      if (slide < maxSlide - 1) setSlide(slide + 1);
    } else {
      if (slide > 0) setSlide(slide - 1);
    }
  };
  const styles = !right
    ? {
        display: slide === 0 ? "none" : "",
      }
    : {
        display: slide === maxSlide - 1 ? "none" : "",
      };
  return (
    <FontAwesomeIcon
      icon={right ? faArrowRight : faArrowLeft}
      className={right ? "arrow right" : "arrow left"}
      onClick={onClick}
      color={color ? color : "white"}
      style={styles}
    />
  );
};

export default Arrow;
