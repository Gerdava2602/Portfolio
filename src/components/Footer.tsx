import * as React from "react";

interface IFooterProps {
  color?: string;
}

const Footer: React.FunctionComponent<IFooterProps> = ({ color }) => {
  return <footer style={{ color: color }}>@2023 Germán Vargas</footer>;
};

export default Footer;
