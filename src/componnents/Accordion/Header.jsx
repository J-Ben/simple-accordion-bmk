import React, { useContext } from "react";
import { accordionContext } from "./Accordion";

const Header = ({ children }) => {
  const { isExpand, setIsExpand } = useContext(accordionContext);
  const toggle = (e) => {
    setIsExpand((isExpand) => !isExpand);
  };
  return (
    <div className="accordion__header">
      {children}
      <b className="accordion__icon" onClick={toggle}>
        +
      </b>
    </div>
  );
};

export default Header;
