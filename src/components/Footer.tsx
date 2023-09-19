import * as React from "react";
import { colors } from "../constants/colors";

interface IFooterProps {
  slide: number;
}

const Footer: React.FunctionComponent<IFooterProps> = ({ slide }) => {
  return <footer style={{ color: colors[slide] }}>@2023 Germán Vargas</footer>;
};

export default Footer;
