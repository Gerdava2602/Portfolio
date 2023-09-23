import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

interface IHeaderProps {
  color: string;
  onLogo: () => void;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ color, onLogo }) => {
  return (
    <header style={{ background: "transparent" }}>
      <div className="logo" onClick={onLogo}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="1200.000000pt"
          height="1200.000000pt"
          viewBox="0 0 1200.000000 1200.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
            fill={color}
            stroke="none"
            style={{ transition: "1.5s" }}
          >
            <path
              d="M3000 6455 l0 -2995 3000 0 3000 0 0 2995 0 2995 -3000 0 -3000 0 0
-2995z m3560 2010 c276 -45 524 -172 796 -405 46 -40 83 -77 82 -81 -2 -5
-128 -150 -281 -323 l-279 -315 -76 65 c-84 71 -204 135 -297 159 -99 26 -279
31 -366 10 -268 -65 -491 -314 -578 -649 -43 -163 -54 -284 -48 -526 9 -359
62 -576 185 -756 102 -151 249 -251 425 -291 102 -23 305 -22 372 1 103 37 95
9 95 316 l0 270 -242 2 -241 3 0 408 c1 224 2 412 2 417 1 7 243 10 704 10
l703 0 0 -932 -1 -931 -94 -73 c-233 -180 -566 -329 -846 -380 -121 -22 -405
-30 -536 -15 -514 59 -938 291 -1216 666 -258 348 -366 699 -380 1231 -7 269
5 422 47 637 80 396 238 706 501 982 271 282 657 466 1080 514 113 13 372 6
489 -14z"
            />
          </g>
        </svg>
      </div>
      <div className="icons">
        <div className="icon email">
          <a href="mailto: germandavidvargas06@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} color={color} />
          </a>
        </div>
        <div className="icon github">
          <a href="https://github.com/Gerdava2602" target="_blank">
            <FontAwesomeIcon icon={faGithub} color={color} />
          </a>
        </div>
        <div className="icon linkedin">
          <a
            href="https://www.linkedin.com/in/germ%C3%A1n-david-vargas-ramos/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} color={color} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
