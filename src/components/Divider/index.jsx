// Libs Divider
import React from 'react';
import "./styles.css";

interface Props {
  color: "dark" | "light";
  style: "thin" | "thick";
}

const Divider= ({ color, style }) => {
const dividerColor = !color ? "dark" : color;
const dividerStyle = !style ? "thin" : style;
  return (
    <hr className={`${dividerColor} ${dividerStyle}`}
    />
  );
};

export default Divider;
